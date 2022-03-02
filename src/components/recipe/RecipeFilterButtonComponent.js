import React, { useEffect, useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";

const RecipeFilterButtonComponent = ({ filterName, activatedFilters, onClick }) => {

    const [isActivated, setIsActivated] = useState(false);

    useEffect(() => {
        if (activatedFilters == null) {
            return;
        }
        activatedFilters.map((activatedFilterName) => {
            if (activatedFilterName === filterName) {
                setIsActivated(true);
            }
        })
    }, [activatedFilters]);

    return (
        <div className={isActivated ? "filterButton selectedFilterButton" : "filterButton"}>
            <p>{filterName}</p>
        </div>
    );
};

export default RecipeFilterButtonComponent;
