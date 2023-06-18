
//you need app.css here because this child isn't getting rendered anywhere
import "../../App.css";
//need react because it's a react app and you're using react syntax
import React from 'react'; 
//if you're going to populate variables and deal with changing/replacing data inside variables, you need this? 
import { useEffect, useState } from 'react';
//if you're using apis you need this
import axios from 'axios'; 
//if you need to take a param from the query string url, you need this
import {useParams} from "react-router-dom"; 



const DetailScreen = () => {  
//define how the data will make it from api to variables
const [recipe, setRecipe] = useState({}); 
const { id } = useParams(); 
//define id as what is coming in a parameter from the url? 

//make axios call
useEffect(() => {
  axios
    .get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
    setRecipe(res.data);
  });
}, []);
//add data to page
return (
  <div className='detail-screen'>
    <div className='img-container'><img src={`${recipe.image_url}`} alt="" /></div>
    <div className="container-recipe-info">
    <div className='left-side'>
      <div className='recipe-info'>
          <h2>Recipe:</h2>
          <h3>Prep Time:{recipe.prep_time}</h3>
          <h3>Cook Time:{recipe.cook_time}</h3>
          <h3>Serves:{recipe.serves}</h3>
      </div>
      <div className='ingredients'>
          <h2>Ingredients</h2>
          {recipe.ingredients && recipe.ingredients.map((el, index) => 
            {return (
              <p>{el.quanity}{el.ingredient}</p>
            )
            }
            )
          }
            
      </div>
    </div>
    <div className='right-side'>
      <h2>Instructions
      </h2>
      <p>{recipe.instructions}</p>

    </div>
    </div>

  </div>

)
};



export default DetailScreen;
