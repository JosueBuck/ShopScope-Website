import { useState } from 'react';
import { FiSearch, FiFilter, FiXCircle, FiRotateCcw, FiCheck } from "react-icons/fi";
import RecipeFilterButtonComponent from './RecipeFilterButtonComponent';
import RecipeWidgetComponent from './RecipeWidgetComponent';

const RecipeOverviewPage = () => {

    const [showFilterSetting, setShowFilterSettings] = useState(false);

    return (

        <div className='recipeOverviewPage'>
            <div className="recipeOverviewPageWrapper">

               

                {
                    showFilterSetting ?
                        
                        <div className="filterSettingsContainer">
                            <p className="filterTitle">Your Filters</p>
                            <p className="filterDescription">Select a recipe type to filter all of your recipes</p>

                            <div className="filterButtonContainer">

                                <RecipeFilterButtonComponent filterName={"testfilter 1"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 2"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 1"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 2"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 1"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 2"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 2"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 2"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 2"} activatedFilters={["testfilter 1", "testfilter 3"]} />
                                <RecipeFilterButtonComponent filterName={"testfilter 3"} activatedFilters={["testfilter 1", "testfilter 3"]} />

                            </div>

                            <div className="resetButtonContainer">
                                <FiRotateCcw className="resetIcon"/>
                            </div>

                            <div className="activateButtonContainer">
                                <FiCheck className="activateIcon"/>
                            </div>

                            <FiXCircle onClick={() => setShowFilterSettings(false)} className="closeIcon" />
                        </div>

                        :
                        <div>
                            <p className="pageTitle">Your Recipes</p>
                            <div className="searchContainer">
                                <div className="search">
                                    <input></input>
                                    <FiSearch />
                                </div>
                                <div onClick={() => setShowFilterSettings(true)} className="filterIconContainer">
                                    <FiFilter />
                                </div>
                            </div>

                            <div className="recipesScrollContainer">
                                <div className="recipesScrollContent">
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                    <RecipeWidgetComponent />
                                </div>
                            </div>

                            <div className="quoteContainer">
                                <div className="horizontalLine"></div>
                                <p>Sometimes something is happening</p>
                                <div className="horizontalLine"></div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default RecipeOverviewPage
