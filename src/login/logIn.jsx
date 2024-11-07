import React from 'react';
import './login.css';
import { AuthState } from './authState';


export function Login({ userName, authState, onAuthChange }) {
  return (

    <main>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    <main className='container-fluid text-center'>
        <div className="login-container">
            <h2>Login</h2>
            <form action="myHome.html">
                <input type="text" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="submit" value="Login"/>
            </form>
        </div>
        <div>
            <a class="btn btn-warning" href="https://github.com/colbyj427/CS260-startup" role="button">Github</a>
        </div>
    </main>
    </main>
  );
}