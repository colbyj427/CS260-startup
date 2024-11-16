import React from 'react';
import { Button } from 'react-bootstrap';
import './recipes.css';

export function Recipes() {
    const [testData, setTestData] = React.useState('Before Button');
    const [recipesMade, setRecipesMade] = React.useState({ score: 0 });

    React.useEffect(() => {
        fetch('/api/scores')
            .then((response) => response.json())
            .then((scores) => {
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

    function buttonpress() {
        console.log('Button pressed');
        console.log(testData);
        const usernameText = localStorage.getItem('userName');
        setTestData(`${usernameText} completed a recipe`);
        console.log(`buttonpress score: ${recipesMade.score}`);
        incrementRecipesMade();
        saveScore(recipesMade.score);
    }

    async function saveScore(score) {
        console.log('Saving score');
        const date = new Date().toLocaleDateString();
        const newScore = { score, date };
        console.log(score);
        console.log(newScore);

        await fetch('/api/score', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newScore),
        });
    }

    return (
        <main>
            <div className="page-content">
                <div className="recipe-header page-box">
                    <p>Populates a quote or something using web service</p>
                    <p>Recipes Made: {recipesMade.score}</p>
                    <p>Recipes come from a database</p>
                </div>
                <div className="recipe-box page-box">
                    <h3>Spaghetti</h3>
                    <p>Description of Recipe 1.</p>
                    Make
                    <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button>
                </div>
                <div className="recipe-box page-box">
                    <h3>Chicken Korma</h3>
                    <p>Description of Recipe 2.</p>
                    <Button variant="primary" onClick={buttonpress}>
                        Finished recipe (uses websocket to update others)
                    </Button>
                </div>
                <div className="web-socket-box page-box">
                    <p>Box for alerts where websocket will show immediate updates.</p>
                    <p>{testData}</p>
                </div>
            </div>
        </main>
    );
}
