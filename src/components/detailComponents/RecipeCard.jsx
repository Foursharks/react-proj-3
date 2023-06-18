import React from 'react'; 
//what is {navigate} again? 
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
      }
  
  
      return (
    <div className='recipe-card'>
        <div className="image-wrapper"><img src={recipe.image_url} /></div>
    <h3 className='recipe-card'>{recipe.recipe_name}</h3>
    <button className='recipe-card' onClick={handleClick}>See More</button></div>
  )
}

export default RecipeCard; 