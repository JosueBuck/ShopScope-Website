import { useState, useEffect } from "react";
import RecipeWidgetComponent from "../recipe/RecipeWidgetComponent";
import { FiEdit2 } from "react-icons/fi";
import ListWidgetComponent from "../list/ListWidgetContainer";
import WeekPlanComponent from "../week/WeekPlanComponent";

import useApi from "../../api/useApi";
import recipeApi from "../../api/recipes";

const HomePage = () => {
  /* API Handeling */
  const getLatestSimplifiedUserRecipesApi = useApi(() =>
    recipeApi
      .getSimplifiedUserRecipes("6183ed4d690c0f5208e3a161")
      .then((results) => {
        if (results.status === 200) {
            setLatestRecipes(results);
            return results;
        }
        return;
      })
  );

  const [userName, setUserName] = useState("");
  const [latestRecipes, setLatestRecipes] = useState(null);

  useEffect(() => {
    getLatestSimplifiedUserRecipesApi.request();
  }, []);

  return (
    <div className="homePage">
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
              {getLatestSimplifiedUserRecipesApi.loading ? (
                <p>loading...</p>
              ) : (
                latestRecipes?.data?.responseData.map(
                  (recipe) => {
                    return (
                      <RecipeWidgetComponent
                        key={recipe._id}
                        recipeName={recipe.recipeName}
                        recipeGarnishName={recipe.garnish}
                        cookingTime={recipe.cookingTime}
                        recipePictureUrl={recipe.recipePictureUrl}
                      />
                    );
                  }
                )
              )}
            </div>
          </div>
        </div>

        <div className="currentListContainer">
          <div className="currentListText">
            <p>Current list</p>
            <FiEdit2 />
          </div>
          <div className="homePageListContainer">
            <ListWidgetComponent
              listName={"TestList"}
              listItemCount={3}
              listPictureUrl={
                "https://www.aok.de/kp/fileadmin/upload/AOK-BW/Curaplan/Bewusst_Leben/Curaplan_aktiv_III_Artikel_Curaplan_Bewusst_Leben_12_richtig_einkaufen_800x500.jpg"
              }
              large={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
