import React from 'react';

const RecipeInfoComponent = ({nameOfInfo, valueOfInfo}) => {

    return (
        <div className="recipeInfoComponent">
            <div className="recipeInfoValueContainer">
                <p className="recipeInfoValue">{valueOfInfo}</p>
            </div>
            <p className="recipeInfoName">{nameOfInfo}</p>
        </div>
    );
};

export default RecipeInfoComponent;
