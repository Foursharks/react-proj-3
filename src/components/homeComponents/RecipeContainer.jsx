import React from "react";
import RecipeCard from "../detailComponents/RecipeCard";
import {useState} from "react"; 

//{recipes is a huge object of all recipes}
const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState("");
    //filter recipes by what you search for
    const recipeDisplay = recipes
    .filter((recipe, index) => {
    //for all recipes that come from the api, make their title lower case
      let title = recipe.recipe_name.toLowerCase()
    //searchParam is what the user typed in, converted to lowercase
      let searchParams = search.toLowerCase()
      //do the filtering to return titles that the user searched for (why is it not returning the entire recipe object? )
      return title.includes(searchParams)
    })
    //then map each recipe that meets the title param to a Recipe card, which will receive a single recipe object
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })

  return (
          //This is the search bar
      <div class="wrapper">
          <div class="searchBar">
              <input id="searchQueryInput" type="text" 

              //destructure the value the user enters
              value={search} name="searchQueryInput" 
              //whatever the change is pass what the user entered to setSearch() which sets search
              onChange={(e) => setSearch(e.target.value)}placeholder="Search for a recipe"/>
          </div>
          <div className="recipe-container">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
        </div>
  );
};

export default RecipeContainer;