import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return ( <div>
        <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="pageHeader">
                    <h1>Colbys Cookbook</h1>
                    <h1>Recipes</h1>
                </div>
                <div class="navigationItems">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="myHome.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pantry.html">Pantry</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="shoppingList.html">Shopping List</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </header>

        <main>App components go here</main>

        
    </div>
  );
}