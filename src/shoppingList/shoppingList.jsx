import React from 'react';

import { useState } from 'react';


export function ShoppingList() {

    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    React.useEffect(() => {
        const itemsText = localStorage.getItem('ShoppingListItems');
        if (itemsText) {
          setItems(JSON.parse(itemsText));
        }
      }, []);

    const addItem = () => {
        if (input.trim() !== "") {
            setItems([...items, input]);
            localStorage.setItem('ShoppingListItems', JSON.stringify([...items, input]));
            setInput('');
        }
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        localStorage.setItem('ShoppingListItems', JSON.stringify(updatedItems));
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <body>
        <main className="add-content">
            <div className="add-box">
                <div className="container mt-5">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText" className="form-label">Enter Ingredient:</label>
                            <input 
                                type="text" 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                                className="form-control" 
                                id="exampleInputText" 
                                placeholder="Enter Item..."
                            />
                        </div>
                    </form>
                </div>
                <div className="add-and-remove">
                    <button type="button" onClick={addItem}>Add Item</button>
                </div> 
            </div>
            <div className="list-box">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item} 
                            <button onClick={() => deleteItem(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
        </body>
    );
}    