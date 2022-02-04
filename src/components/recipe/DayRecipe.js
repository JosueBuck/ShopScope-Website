import React from 'react';
import { FiMinusCircle } from "react-icons/fi";

const DayRecipe = ({ recipePictureUrl, recipeName, recipeGarnishName }) => {

    const widgetRecipePictureStyling = {
        backgroundImage: 'url(' + recipePictureUrl + ')',
        backgroundSize: 'cover',
    }

    return (
        <div style={widgetRecipePictureStyling} className="dayRecipeContainer">
            <div className="backgroundFiller">

            </div>

            <div className="recipeInfo">
                <p className="recipeName">{recipeName}</p>
                <p className="garnishName">{recipeGarnishName}</p>
            </div>

            <FiMinusCircle className="closeIcon"/>

        </div>
    );
};

export default DayRecipe;
