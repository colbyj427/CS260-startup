import React from 'react';
import './myHome.css';

export function MyHome() {
  return (
    <main>
        <div class="home-boxes">
            <div class="home-pantry home-box">
                <a href="pantry.html">Pantry</a>
                <p>This will pull pantry data from the database</p>
                <ul>
                    <li>spaghetti</li>
                    <li>onion</li>
                    <li>cheddar cheese</li>
                </ul>
            </div>
            <div class="home-recipes home-box">
                <a href="recipes.html">Recipes</a>
                <p>This will pull recipes from the database</p>
                <ul>
                    <li>Spaghetti Bolognese</li>
                    <li>Lasagna</li>
                    <li>French Fries</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
            <div class="home-shopping-list home-box">
                <a href="shoppingList.html">Shopping List</a>
                <p>This will pull shopping data from the database</p>
                <ul>
                    <li>apple</li>
                    <li>fettucine</li>
                    <li>alfredo sauce</li>
                    <li>bacon</li>
                    <li>frozen chicken breast</li>
                </ul>
            </div>
        </div>
    </main>
  );
}