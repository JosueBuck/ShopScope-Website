import React, { useState } from 'react';
import RecipeTypeComponent from './RecipeTypeComponent';
import { FiPlus, FiMinus } from "react-icons/fi";


const RecipeTypeContainerComponent = ({ }) => {

    const [showAllTypes, setShowAllTypes] = useState(false);

    return (
        <div className="editRecipeTypesContainer">
            <div className="editRecipeFlexBox">
                <div className="editRecipeTypes">
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                </div>

                {
                    showAllTypes ?
                    <FiMinus className="addRecipeTypeButton" onClick={() => {setShowAllTypes(!showAllTypes)}} />
                
                    :

                    <FiPlus className="addRecipeTypeButton" onClick={() => {setShowAllTypes(!showAllTypes)}} />               
                }
               

            </div>

            {
                showAllTypes ?

                <div className="allTypesContainer">
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                    <RecipeTypeComponent recipeName={"testType"} />
                </div>

                :

                <div></div>
            }

        </div>
    );

};

export default RecipeTypeContainerComponent;
