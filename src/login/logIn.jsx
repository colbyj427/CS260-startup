import React from 'react';
import './login.css';


export function Login() {
  return (
    <main className='container-fluid text-center'>
        <div className="login-container">
            <h2>Login</h2>
            <form action="myHome.html">
                <input type="text" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    </main>
  );
}