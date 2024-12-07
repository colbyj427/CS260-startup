import React from 'react';
import './myHome.css';
import { useEffect, useState } from 'react';

export function MyHome() {
    const [pantryItems, setPantryItems] = useState([]);
    const [shoppingListItems, setShoppingListItems] = useState([]);

    React.useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
          .then((response) => response.json())
          .then((data) => {
            const containerEl = document.querySelector('#picture');
      
            const width = containerEl.offsetWidth;
            const height = containerEl.offsetHeight;
            const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
            setImageUrl(apiUrl);
          })
          .catch();
      
        fetch('https://quote.cs260.click')
          .then((response) => response.json())
          .then((data) => {
            setQuote(data.quote);
            setQuoteAuthor(data.author);
          })
          .catch();
      }, []);

    React.useEffect(() => {
        const pantryItemsText = localStorage.getItem('pantryItems');
        if (pantryItemsText) {
          setPantryItems(JSON.parse(pantryItemsText));
        }
        const shoppingListItemsText = localStorage.getItem('ShoppingListItems');
        if (shoppingListItemsText) {
          setShoppingListItems(JSON.parse(shoppingListItemsText));
        }
      }, []);

  return (
    <main>
        <div class="home-boxes">
            <div class="home-pantry home-box">
                <a href="pantry.html">Pantry</a>
                <p>Add food items to your pantry to see what you have available!</p>
                <ul>
                    {pantryItems.map((item, index) => (
                        <li key={index}>
                            {item} 
                        </li>
                    ))}
                </ul>
            </div>
            <div class="home-recipes home-box">
                <a href="recipes.html">Recipes</a>
                <p>View the delicious recipes you can choose from!</p>
                <ul>
                    <li>Spaghetti</li>
                    <li>Lasagna</li>
                    <li>French Fries</li>
                </ul>
            </div>
            <div class="home-shopping-list home-box">
                <a href="shoppingList.html">Shopping List</a>
                <p>Add items to your shopping list that you don't have yet!</p>
                    <ul>
                    {shoppingListItems.map((item, index) => (
                        <li key={index}>
                            {item} 
                        </li>
                    ))}
                    </ul>
                {/* <ul>
                    <li>apple</li>
                    <li>fettucine</li>
                    <li>alfredo sauce</li>
                    <li>bacon</li>
                    <li>frozen chicken breast</li>
                </ul> */}
            </div>
        </div>
    </main>
  );
}