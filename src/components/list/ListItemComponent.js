import React, { useState, useEffect } from 'react';
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const ListItemComponent = ({ ingredientName, amount, onClick, addedIngredients, onEdit, isAddComponent }) => {

    const [isAdded, setIsAdded] = useState(true)

    return (
        <div className="listItemComponent">

            <div className="itemNameContainer">
                {
                    isAddComponent ?

                        <input></input>

                        :

                        <p className="listItemParagraph">{ingredientName}</p>
                }

            </div>

            <div className="listItemAmountContainer">

                {
                    isAddComponent ?

                        <input></input>

                        :

                        <p className="listItemParagraph">{amount}</p>
                }

            </div>

            {
                isAddComponent ?

                    <div className="listItemButton">
                        <FiPlus className="icon" />
                    </div>

                    :

                    <div className="listItemButtons">
                                <div className="listItemButton">
                                    {
                                        isAdded ? <></> : <>X</>
                                    }
                                </div>
                                <div className="listItemButton">
                                    {
                                        <FiTrash2 className="icon" />
                                    }
                                </div>

                    </div>
            }






        </div>
    );
};

export default ListItemComponent;
