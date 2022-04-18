import React, { useState } from 'react';
import { FiXCircle, FiSliders, FiPlus } from "react-icons/fi";
import RecipeInfoComponent from '../general/InfoComponent';
import RecipeIngredientComponent from './RecipeIngredientComponent';
import RecipeTypeContainerComponent from './RecipeTypeContainerComponent';

const RecipePage = () => {

    const [editRecipe, setEditRecipe] = useState(false);
    const [aboutRecipe, setAboutRecipe] = useState("test test test");
    const [recipeInstructions, setRecipeInstructions] = useState("test test test");

    const handleAboutRecipeChange = (event) => {
        setAboutRecipe(event.target.value)
    }

    const handleRecipeInstructionsChange = (event) => {
        setRecipeInstructions(event.target.value)
    }

    let recipePictureUrl = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80";

    const widgetRecipePictureStyling = {
        backgroundImage: 'url(' + recipePictureUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="recipePage">
            <div style={widgetRecipePictureStyling} className="recipePictureContainer">

            </div>

            <div className="recipeContentContainer">

                <div className="recipeContentWrapper">

                    <div className="recipeHeader">

                        <div className="recipeHeaderFlexContainer">
                            <div className="recipeNameContainer">

                                {
                                    editRecipe ?

                                        <div className="recipeNameEditView">
                                            <div className="editRecipeNameNormalView">
                                                <p className="recipeName">Recipe Settings</p>
                                                <p className="garnishName">Here you can change and adjust your recipe</p>
                                            </div>

                                            <div className="editRecipeNameDesktopView">
                                                <div className="editRecipeNameFlexContainer">
                                                    <p className="recipeName">Recipe Name:</p>
                                                    <input />
                                                </div>

                                                <div className="editRecipeNameFlexContainer">
                                                    <p className="recipeName">Side Dish: </p>
                                                    <input />
                                                </div>
                                            </div>

                                        </div>


                                        :

                                        <div className="recipeNameNormalView">
                                            <p className="recipeName">Schweine Medallions</p>
                                            <p className="garnishName">mit hausgemachten Spätzle</p>
                                            <div className="recipeTypeContainer">
                                                <p className="recipeType">Homecooked</p>
                                                <p className="recipeType">Homecooked</p>
                                                <p className="recipeType">Homecooked</p>
                                                <p className="recipeType">Homecooked</p>
                                                <p className="recipeType">Homecooked</p>
                                                <p className="recipeType">Homecooked</p>
                                            </div>
                                        </div>
                                }
                            </div>
                            {
                                editRecipe ?

                                    <div className="recipeButtons exitEditViewButton">
                                        <div className="exitRecipePageButton">
                                            <FiXCircle onClick={() => { setEditRecipe(false) }} className="recipePageIcon" />
                                        </div>
                                    </div>


                                    :

                                    <div className="recipeButtons">
                                        <div className="changeRecipeButton">
                                            <FiSliders onClick={() => { setEditRecipe(true) }} className="recipePageIcon" />
                                        </div>
                                        <div className="exitRecipePageButton">
                                            <FiXCircle className="recipePageIcon" />
                                        </div>
                                    </div>
                            }
                        </div>

                        {
                                editRecipe ? 

                                <div className="editRecipeTypeDesktopView">
                                    <RecipeTypeContainerComponent />
                                </div>

                                :
                                <></>
                            }
                        
                    </div>

                    {
                        editRecipe ?

                            <div className="changeRecipeInfoSection">
                                <div className="editSmallScreenView">
                                    <div className="changeRecipeInfoInputContainer">
                                        <p className="recipeSubheading">Recipe Name:</p>
                                        <input placeholder="Name of your recipe" className="recipeNameInput"></input>
                                    </div>
                                    <div className="changeRecipeInfoInputContainer">
                                        <p className="recipeSubheading">Side Dish:</p>
                                        <input placeholder="Side dish of your recipe" className="recipeNameInput"></input>
                                    </div>
                                    <div className="changeRecipeInfoInputContainer">
                                        <p className="recipeSubheading">Recipe Types:</p>
                                        <RecipeTypeContainerComponent />

                                    </div>
                                    <div className="changeRecipeInfoInputContainer">
                                        <p className="recipeSubheading">Recipe Picture Url:</p>
                                        <input placeholder="Url of your picture" className="recipeNameInput"></input>
                                    </div>
                                </div>

                                <div className="editDesktopView">

                                </div>

                            </div>


                            :

                            <div className="recipeInfoSection">
                                <RecipeInfoComponent nameOfInfo={"Cooking Time"} valueOfInfo={30} />
                                <RecipeInfoComponent nameOfInfo={"Ingredients"} valueOfInfo={9} />
                            </div>
                    }



                    <div className="recipeMainSection">

                        {
                            editRecipe ?

                                <div className="recipeAboutSection">



                                    <p className="recipeSubheading">About Recipe</p>
                                    <textarea value={aboutRecipe} onChange={handleAboutRecipeChange}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                    </textarea>

                                </div>


                                :

                                <div className="recipeAboutSection">



                                    <p className="recipeSubheading">About Recipe</p>
                                    <p className="recipeNormalText">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                    </p>

                                </div>
                        }



                        <div className="recipeIngredientsSection">

                            <p className="recipeSubheading">Ingredients</p>
                            <div className="recipeIngredientsContainer">
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                                <RecipeIngredientComponent onEdit={editRecipe} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />
                            </div>

                            {
                                editRecipe ?

                                    <RecipeIngredientComponent isAddComponent={true} ingredientName={"test ingredient 1"} amount={"1 Unit"} addedIngredients={["test ingredient 1, test ingredient 2"]} />

                                    :

                                    <div className="addRecipeButton">
                                        <p>Add</p>
                                    </div>

                            }


                        </div>



                        {
                            editRecipe ?

                                <div className="recipeInstructionsSection">



                                    <p className="recipeSubheading">About Recipe</p>
                                    <textarea value={recipeInstructions} onChange={handleRecipeInstructionsChange}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                    </textarea>

                                </div>


                                :

                                <div className="recipeAboutSection">



                                    <p className="recipeSubheading">Instructions</p>

                                    <p className="recipeNormalText">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                    </p>

                                </div>
                        }

                    </div>



                </div>

            </div>
        </div>
    );
};

export default RecipePage;
