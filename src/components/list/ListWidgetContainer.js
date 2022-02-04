import React from 'react';
import { MdFastfood } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const ListWidgetComponent = ({ listPictureUrl, listName, listItemCount }) => {

    const widgetListPictureStyling = {
        backgroundImage: 'url(' + listPictureUrl + ')',
        backgroundSize: 'cover',
    }

    return <div className='listWidgetContainer'>
        <div style={widgetListPictureStyling} className='listWidgetPicture'></div>
        <div className='listWidgetInfoContainer'>
            <p className='listName'>{listName}</p>
            <div className='listItemCountContainer'>
                {listItemCount}
            </div>
        </div>
    </div>;
};

export default ListWidgetComponent;
