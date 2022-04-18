import React from 'react';

const RecipeInfoComponent = ({nameOfInfo, valueOfInfo, icon, showIcon}) => {

    return (
        <div className="recipeInfoComponent">
            <div className="recipeInfoValueContainer">
                {
                    showIcon ?

                    icon

                    :

                    <p className="recipeInfoValue">{valueOfInfo}</p>
                }
               
            </div>
            <p className="recipeInfoName">{nameOfInfo}</p>
        </div>
    );
};

export default RecipeInfoComponent;
