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
                    <p>Populates a quote or something using web service</p>
                    <p>Recipes Made: {recipesMade.score}</p>
                    <div className='quote-box'>
                        <p className='quote'>{quote}</p>
                        <p className='author'>{quoteAuthor}</p>
                    </div>
                </div>
                <div className="recipe-box page-box">
                    <h3>Spaghetti</h3>
                    <p>Description of Recipe 1.</p>
                    {/* <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button> */}
                </div>
                <div className="recipe-box page-box">
                    <h3>Chicken Korma</h3>
                    <p>Description of Recipe 2.</p>
                    {/* <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button> */}
                </div>
                {/* <div className="web-socket-box page-box">
                    <p>Box for alerts where websocket will show immediate updates.</p>
                    <p>{createMessageArray()}</p>
                    <p>{testData}</p> 
                </div>  */}
            </div> 
        </main>
    );
}
