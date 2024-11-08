import React from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';
import { App } from './app.jsx'

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);


  async function loginUser() {
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    
    

    // props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    // props.onLogin(userName);
  }

  return (
    <>
      <main className='container-fluid text-center'>
          <div className="login-container">
              <h2>Login</h2>
              <form action="myHome.html">
                  <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='username' />
                  <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                  <div class="submitButtons">
                    <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                      Login
                    </Button>
                    <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                      Create
                    </Button>
                  </div>
              </form>
          </div>
          <div>
              <a class="btn btn-warning" href="https://github.com/colbyj427/CS260-startup" role="button">Github</a>
          </div>
      </main>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
