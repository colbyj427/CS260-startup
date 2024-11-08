import React from 'react';
import { Button } from 'react-bootstrap'
import './recipes.css';

export function Recipes() {
    const [testData, setTestData] = React.useState('Before Button');

    function buttonpress() {
        console.log('Button pressed');
        console.log(testData);
        const usernameText = localStorage.getItem('userName');
        setTestData(`${usernameText} completed a recipe`);
      }

  return (
    <main>
        <div class="page-content">
            {/* <div class="recipe-header page-box">
                <h2>Recipes Made: ##</h2>
                <p>updates using web service</p>
                <div class="search-bar page-box">
                    <input type="text" class="form-control" id="recipeSearch" placeholder="Search for recipes..."/>
                    <button class="btn btn-primary" type="button" onclick="searchRecipes()">Search</button>
                </div>
                <p>Recipes come from a database</p>
            </div> */}
            <div class="recipe-header page-box">
                <p>Populates a quote or something using web service</p>
                <p>Recipes come from a database</p>
            </div>
            <div class="recipe-box page-box">
                <h3>Spaghetti</h3>
                <p>Description of Recipe 1.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam eget augue tincidunt pharetra. Sed tincidunt orci leo, nec consectetur arcu sodales eu. Nunc quis vulputate est. Duis convallis lacus turpis, sed tempus sem pellentesque et. Proin euismod, erat nec molestie aliquam, enim lectus hendrerit neque, eget imperdiet neque justo pellentesque lacus. Maecenas bibendum placerat libero, sed sagittis dolor congue vel. Nunc vestibulum at turpis id pellentesque. Nunc magna risus, malesuada ut molestie eget, iaculis at ante. Maecenas suscipit pulvinar eleifend. Maecenas luctus leo ac tincidunt pulvinar. Phasellus et risus tincidunt, sollicitudin nisi eu, porta mauris. Aliquam erat volutpat. Nullam imperdiet tellus vel dui tristique consequat non vitae eros.</p>
                <Button variant='primary' onClick={buttonpress}>Finished recipe (uses websocket to update others)</Button>
            </div>
            <div class="recipe-box page-box">
                <h3>Chicken Korma</h3>
                <p>Description of Recipe 2.</p>
                <Button variant='primary' onClick={buttonpress}>Finished recipe (uses websocket to update others)</Button>
            </div>
            <div class="web-socket-box page-box">
                <p>Box for alerts where websocket will show immediate updates.</p>
                <p>{testData}</p>
            </div>
        </div>
    </main>
  );
}