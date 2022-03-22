import React, { useState, useEffect } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

const RecipeIngredientComponent = ({ ingredientName, amount, onClick, addedIngredients, onEdit, isAddComponent }) => {

    const [isAdded, setIsAdded] = useState(true);

    /* useEffect(() => {
        addedIngredients.map((ingredient) => {
            if (ingredientName === ingredient) {
                setIsAdded(true)
            }
        })
    }) */

    return (
        <div className="recipeIngredientComponent">

            <div className="ingredientNameContainer">
                {
                    isAddComponent ?

                        <input></input>

                        :

                        <p className="recipeIngredientParagraph">{ingredientName}</p>
                }

            </div>

            <div className="ingredientAmountContainer">

                {
                    isAddComponent ?

                        <input></input>

                        :

                        <p className="recipeIngredientParagraph">{amount}</p>
                }

            </div>

            {
                isAddComponent ?

                    <div className="recipeIngredientButton">
                        <FiPlus className="icon" />
                    </div>

                    :

                    <div>
                        {
                            onEdit ?

                                <div className="recipeIngredientButton">
                                    <FiMinus className="icon" />
                                </div>

                                :

                                <div className="recipeIngredientButton">
                                    {
                                        isAdded ? <FiPlus className="icon" /> : <FiMinus />
                                    }
                                </div>
                        }
                    </div>
            }






        </div>
    );
};

export default RecipeIngredientComponent;
