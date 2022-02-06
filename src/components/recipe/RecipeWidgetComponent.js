import React from 'react';
import { MdFastfood } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const RecipeWidgetComponent = ({recipePictureUrl, recipeName, recipeGarnishName, cookingTime, recipeType}) => {

    const widgetRecipePictureStyling = {
        backgroundImage: 'url(' + recipePictureUrl + ')',
        backgroundSize: 'cover',
    }

    return <div className='recipeWidgetContainer'>
        <div style={widgetRecipePictureStyling} className='recipeWidgetPicture'></div>
        <div className='recipeWidgetInfoContainer'>
            <div className='recipeWidgetNameContainer'>
                <p className='recipeName'>{recipeName}</p>
                <p className='recipeGarnishName'>{recipeGarnishName}</p>
            </div>
            <div className='recipeWidgetInfoIconsContainer'>
                <div className='cookingTimeContainer'>
                    <FiClock className='cookingTimeIcon' />
                    <FiClock className={`cookingTimeIcon ${cookingTime > 9 ? '' : 'passive'}`}/>
                    <FiClock className={`cookingTimeIcon ${cookingTime > 29 ? '' : 'passive'}`} />
                </div>
                <div className='recipeTypeContainer'>
                    <MdFastfood className='recipeTypeIcon' />
                </div>
            </div>
        </div>
    </div>;
};

export default RecipeWidgetComponent;
