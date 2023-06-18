import React from 'react';
import AdBanner from './AdBanner';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import RecipeContainer from '../homeComponents/RecipeContainer';

const HomeScreen = () => {  
// basically home screen displays a few things and then displays recipe cards
//why in this case do we need =useState([]) instead of useState({})
    const [recipes, setRecipes] = useState([]); 

    const getRecipes = () => {
      axios.get("https://recipes.devmountain.com/recipes")
          .then((res) => {
              setRecipes(res.data)
              console.log(res.data)
                        }
                )
                              }
      //this says when something changes in...what? run getRecipes?
      useEffect(()=> {getRecipes()}, [])
  return (
    <div>
      
      <AdBanner />

      <div><RecipeContainer recipes = {recipes} /></div>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}



export default HomeScreen; 