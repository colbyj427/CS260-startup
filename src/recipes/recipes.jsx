import React from 'react';
import { Button } from 'react-bootstrap';
import './recipes.css';

export function Recipes() {
    const [testData, setTestData] = React.useState('Before Button');
    const [recipesMade, setRecipesMade] = React.useState({ score: 0 });

    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/scores')
            .then((response) => response.json())
            .then((score) => {
                setRecipesMade(score); // Assuming API response is { score: <number> }
            })
            .catch((error) => console.error('Error fetching scores:', error));
    }, []);

    function incrementRecipesMade() {
        setRecipesMade((prev) => ({
            ...prev,
            score: prev.score + 1,
        }));
    }

    React.useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        fetch('https://quote.cs260.click')
          .then((response) => response.json())
          .then((data) => {
            setQuote(data.quote);
            setQuoteAuthor(data.author);
          })
          .catch();
    }, []);
    
    async function saveScore(score) {
        console.log('Saving score');
        const date = new Date().toLocaleDateString();
        const userName = localStorage.getItem('userName');
        const newScore = { email: userName, score: score };
        console.log(score);
        console.log(newScore);
        await fetch('/api/score', {
            method: 'POST',
            body: JSON.stringify(newScore),
            headers: { 'content-type': 'application/json' },
        });
    }

    function buttonpress() {
        console.log('Button pressed');
        console.log(testData);
        const usernameText = localStorage.getItem('userName');
        setTestData(`${usernameText} completed a recipe`);
        console.log(`buttonpress score: ${recipesMade.score}`);
        // Let other players know the user clicked the button
        incrementRecipesMade();
        saveScore(recipesMade.score);
    }

    return (
        <main>
            <div className="page-content">
                <div className="recipe-header page-box">
                    {/* <p>Recipes Made: {recipesMade.score}</p> */}
                    <div className='quote-box'>
                        <p className='quote'>{quote}</p>
                        <p className='author'>{quoteAuthor}</p>
                    </div>
                </div>
                <div className="recipe-box page-box">
                    <h3>Spaghetti</h3>
                    <p>Ingredients:</p>
                    <ul>
                        <li>200g spaghetti</li>
                        <li>2 cloves garlic</li>
                        <li>400g canned tomatoes</li>
                        <li>50g parmesan cheese</li>
                        <li>Salt and pepper to taste</li>
                    </ul>
                    <p>Instructions:</p>
                    <ol>
                        <li>Boil the spaghetti according to the package instructions.</li>
                        <li>In a pan, sauté the garlic until golden brown.</li>
                        <li>Add the canned tomatoes and simmer for 10 minutes.</li>
                        <li>Mix the cooked spaghetti with the sauce.</li>
                        <li>Serve with grated parmesan cheese on top.</li>
                    </ol>
                    {/* <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button> */}
                </div>
                <div className="recipe-box page-box">
                    <h3>Lasagna</h3>
                    <p>Ingredients:</p>
                    <ul>
                        <li>12 lasagna noodles</li>
                        <li>500g ricotta cheese</li>
                        <li>2 cups shredded mozzarella cheese</li>
                        <li>1/2 cup grated Parmesan cheese</li>
                        <li>1 egg</li>
                        <li>1 pound ground beef</li>
                        <li>1 jar marinara sauce</li>
                        <li>Salt and pepper to taste</li>
                    </ul>
                    <p>Instructions:</p>
                    <ol>
                        <li>Preheat oven to 375°F (190°C).</li>
                        <li>Cook the lasagna noodles according to the package instructions.</li>
                        <li>In a bowl, mix ricotta cheese, 1 1/2 cups mozzarella cheese, Parmesan cheese, and egg. Season with salt and pepper.</li>
                        <li>In a pan, cook the ground beef until browned. Drain excess fat and add marinara sauce. Simmer for 10 minutes.</li>
                        <li>Spread a thin layer of meat sauce in the bottom of a baking dish. Place a layer of noodles on top.</li>
                        <li>Spread a layer of the cheese mixture over the noodles, followed by a layer of meat sauce. Repeat layers, ending with meat sauce.</li>
                        <li>Sprinkle remaining mozzarella cheese on top.</li>
                        <li>Cover with aluminum foil and bake for 25 minutes. Remove foil and bake for an additional 25 minutes, or until cheese is bubbly and golden brown.</li>
                        <li>Let cool for 10 minutes before serving.</li>
                    </ol>
                    {/* <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button> */}
                </div>
                <div className="recipe-box page-box">
                    <h3>French Fries</h3>
                    <p>Ingredients:</p>
                    <ul>
                        <li>4 large potatoes</li>
                        <li>Vegetable oil for frying</li>
                        <li>Salt to taste</li>
                    </ul>
                    <p>Instructions:</p>
                    <ol>
                        <li>Peel and cut the potatoes into thin strips.</li>
                        <li>Soak the potato strips in cold water for at least 30 minutes to remove excess starch.</li>
                        <li>Heat the vegetable oil in a deep fryer or large pot to 350°F (175°C).</li>
                        <li>Drain and pat the potato strips dry with paper towels.</li>
                        <li>Fry the potato strips in batches until golden brown and crispy, about 3-4 minutes per batch.</li>
                        <li>Remove the fries from the oil and drain on paper towels.</li>
                        <li>Season with salt to taste and serve immediately.</li>
                    </ol>
                    {/* <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button> */}
                </div>
                {/* <div className="web-socket-box page-box">
                    <p>Box for alerts where websocket will show immediate updates.</p>
                    <p>{createMessageArray()}</p>
                    <p>{testData}</p> 
                </div>  */}
                {/* <div className="web-socket-box page-box">
                    <p>Box for alerts where websocket will show immediate updates.</p>
                    <p>{createMessageArray()}</p>
                    <p>{testData}</p> 
                </div>  */}
            </div> 
        </main>
    );
}
