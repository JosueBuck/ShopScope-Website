import React from 'react';
import { MdFastfood } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const ListWidgetComponent = ({ listPictureUrl, listName, listItemCount, large }) => {

    const widgetListPictureStyling = {
        backgroundImage: 'url(' + listPictureUrl + ')',
        backgroundSize: 'cover',
    }

    return <div className={large ? "largListWidgetContainer" : "listWidgetContainer"}>
        <div style={widgetListPictureStyling} className='listWidgetPicture'></div>
        <div className='listWidgetInfoContainer'>
            <div className="listNameContainer">
                <p className='listName'>{listName}</p>
            </div>
            <div className='listItemCountContainer'>
                {listItemCount}
            </div>
        </div>
    </div>;
};

export default ListWidgetComponent;
