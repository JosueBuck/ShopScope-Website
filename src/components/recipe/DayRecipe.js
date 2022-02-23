import { useState } from 'react';
import { FiMinusCircle, FiXCircle } from "react-icons/fi";

const DayRecipe = ({ recipePictureUrl, recipeName, recipeGarnishName, onClick, onDelete }) => {

    const [showDetails, setShowDetails] = useState(false);

    const widgetRecipePictureStyling = {
        backgroundImage: 'url(' + recipePictureUrl + ')',
        backgroundSize: 'cover',
    }

    return (
        <div style={widgetRecipePictureStyling} className="dayRecipeContainer">
            <div className="backgroundFiller">

            </div>
            {
                showDetails ?

                    <div className="recipeDetailInfo">
                        <div className="recipeHeaderContainer">

                            <div className="recipeInfo">
                                <p className="recipeName">{recipeName}</p>
                                <p className="garnishName">{recipeGarnishName}</p>
                            </div>

                            <FiXCircle onClick={() => setShowDetails(false)} className="closeIcon" />

                        </div>

                        <div className="recipeBodyContainer">
                            <p className="recipeBodyTitle">Selected Ingeddients</p>

                            <div className="ingredientsContainer">
                                <div className="ingredientsTitel"> 
                                    <p className="ingredientNameTitle">Name</p>
                                    <p className="ingredientAmountTitle">Amount</p>
                                </div>

                                <div className="ingedirentContent"> 
                                    <p>test ingedient</p>
                                    <p>1 Unit</p>
                                </div>

                                <div className="ingedirentContent"> 
                                    <p>test ingedient</p>
                                    <p>1 Unit</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="receipeNormalInfo">
                        <div onClick={() => setShowDetails(true)} className="recipeInfo">
                            <p className="recipeName">{recipeName}</p>
                            <p className="garnishName">{recipeGarnishName}</p>
                        </div>
                        <FiMinusCircle onClick={() => onDelete()} className="deleteIcon" />

                    </div>


            }


            
        </div>
    );
};

export default DayRecipe;
