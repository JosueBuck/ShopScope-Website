import { useState } from "react";
import RecipeWidgetComponent from "../recipe/RecipeWidgetComponent";
import { FiEdit2 } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import ListWidgetComponent from "../list/ListWidgetContainer";
import WeekPlanComponent from "../week/WeekPlanComponent";

const HomePage = () => {

    const [userName, setUserName] = useState('');

    return (
        <div className='homePage'>

            {/* <div className="userAccountIconContainer">
                <RiAccountCircleFill className="icon" />
            </div> */}

            <div className="homePageWrapper">

                <div className="welcomeContainer">
                    <p className="welcomeName">Hey {userName}</p>
                    <p className="welcomeMessage">Ready to plan your week?</p>
                </div>

                <WeekPlanComponent />

                <div className="latestRecipesContainer">
                    <div className="latestRecipesText">
                        <p>Latest recipes</p>
                    </div>
                    <div className="latestRecipesScrollContainer">
                        <div className="latestRecipesScrollContent">
                            <RecipeWidgetComponent recipeName={'Vegetarischer Bürger'} recipeGarnishName={'mit frischen Rosmarinkartoffeln und Sour Cream'} recipePictureUrl={'https://www.malteskitchen.de/wp-content/uploads/2014/02/rindfleisch-burger-camembert-zwiebelconfit-7193.jpg'} />
                            <RecipeWidgetComponent />
                            <RecipeWidgetComponent />
                            <RecipeWidgetComponent />
                            <RecipeWidgetComponent />
                        </div>
                    </div>
                </div>

                <div className="currentListContainer">
                    <div className="currentListText">
                        <p>Current list</p>
                        <FiEdit2 />
                    </div>
                    <div className="homePageListContainer">
                        <ListWidgetComponent listName={'TestList'} listItemCount={3} listPictureUrl={'https://www.aok.de/kp/fileadmin/upload/AOK-BW/Curaplan/Bewusst_Leben/Curaplan_aktiv_III_Artikel_Curaplan_Bewusst_Leben_12_richtig_einkaufen_800x500.jpg'} />
                    </div>

                </div>
            </div>



        </div>
    )
}

export default HomePage
