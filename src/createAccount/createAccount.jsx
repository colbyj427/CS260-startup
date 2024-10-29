import React from 'react';
import './createAccount.css';

export function CreateAccount() {
  return (
    <main className='container-fluid text-center'>
        <div className="account-box">
            <h2>Create Account</h2>
            <form>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </main>
  );
}