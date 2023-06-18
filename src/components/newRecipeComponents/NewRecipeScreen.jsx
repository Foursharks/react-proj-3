import React, { useState } from "react";

//importing formik so we can use the form handling library
import { Formik } from "formik";
import "../../App.css";
import axios from "axios";

  
  const NewRecipeScreen = () => {
    //sets up a way to update "ingredients"
    const [ingredients, setIngredients] = useState([]);
    //sets up a way to update "name"
    const [name, setName] = useState("");
    //sets up a way to update quantity
    const [quantity, setQuantity] = useState("");

  
    const addIngredient = () => {
      //runs the 3 functions to set ingredients(since it is an array, needs to get mapped), name, amd quantity
      //note that name and quantity are the key/value items in each ingredient object inside the ingredients array
      setIngredients([...ingredients, { name, quantity }]);
      setName("");
      setQuantity("");
    };
  
    const initialValues = {
      //sets up default form fields (using initialValues prop)
      type: "",
      recipeName: "",
      imageURL: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: [],
      instructions: "",
    };
    //post request
    const onSubmit = (values) => {
      //the values object is the object created by the user's form entry
      values.ingredients = ingredients;
      console.log(values);
      axios.post(`https://recipes.devmountain.com/recipes`, values)
     .then((res) => {
       console.log(res.data);
     })
     .catch((err) => {
       console.log(err);
     });
     
    };


    //ingredients is an array of objects that this function will dsiplay on the page
    const ingredientDisplay = ingredients.map((ing) => {
      return (
        <li>
          {ing.quantity} {ing.name}
        </li>
      );
    });
  
    return (
      <section>
        <h1>Add a new recipe</h1>
      {/* creates a new formik component with initialValues and onSubmit props */}
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {/* //function that accepts values, handleChange, and handlesubmit functions*/}
          {({ values, handleChange, handleSubmit }) => (
            // on submition of form, 
            <form onSubmit={handleSubmit}>
              <div >
                <input
                // add placeholder 
                  placeholder="Title"
                  // set value of user's input as recipe name, pass it up to onSubmit/post
                  value={values.recipeName}
                  //The handleChange method updates the form values based on the input's name attribute that was changed
                  onChange={handleChange}
                  name="recipeName"
                />
                <input
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                />
              </div>
              <div>
                <span>
                  <input
                    type="radio"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Cook</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Bake</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Drink</h5>
                </span>
              </div>
              <div >
                <input
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                />
                <input
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                />
                <input
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                />
              </div>
              <h3>Ingredients</h3>
              <div >
                <div >
                  <input
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                {/* show all the ingredients by running ingredientDisplay, which maps all added ingredients */}
                <ul>{ingredientDisplay}</ul>
              </div>
              <button
                type="button"
                className="orange-btn"
                onClick={addIngredient}
              >
                Add Another
              </button>
              <textarea
                placeholder="Add your instructions"
                rows={6}
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              />
              <button type="submit" className="blue-btn">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </section>
    );
  };
  
  export default NewRecipeScreen;
  