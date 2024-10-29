import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/logIn';
import { MyHome } from './myHome/myHome';
import { Pantry } from './pantry/pantry';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shoppingList/shoppingList';
import { CreateAccount } from './createAccount/createAccount';

export default function App() {
  return ( 
    <BrowserRouter>
        <div>
        <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="pageHeader">
                    <h1>Colbys Cookbook</h1>
                </div>
                <div className="navigationItems">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a class="nav-link" href="myHome.html">Home</a> */}
                                <NavLink className='nav-link' to='myHome'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='pantry'>Pantry</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='recipes'>Recipes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='shoppingList'>Shopping List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='login'>Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='createAccount'>Create Account</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </header>

        <Routes>
            <Route path='/login' element={<Login />} exact />
            <Route path='/myHome' element={<MyHome />} />
            <Route path='/pantry' element={<Pantry />} />
            <Route path='/shoppingList' element={<ShoppingList />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/createAccount' element={<CreateAccount />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }