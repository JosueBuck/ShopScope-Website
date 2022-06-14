import { useState, useEffect } from "react";
import DayComponent from "./DayComponent";
import FoodTimeComponent from "./FoodTimeComponent";
import { FiChevronsUp, FiSend, FiTrash, FiEdit2 } from "react-icons/fi";
import DayRecipe from "../recipe/DayRecipe";
import AddDayRecipe from "../recipe/AddDayRecipeComponent";
import WeekButtonComponent from "./WeekButtonComponent";

import useApi from "../../api/useApi";
import weekApi from "../../api/week";

const WeekPlanComponent = () => {
  const getUserWeek = useApi(() =>
    weekApi.getUserWeek("6183ed4d690c0f5208e3a161").then((results) => {
      console.log(results);
      if (results.status === 200) {
        setUserWeek(results.data.responseData);
        return results;
      }
      return;
    })
  );

  const [userWeek, setUserWeek] = useState(null);

  const dayNames = [
    {
      shortName: "MON",
      name: "Monday",
    },
    {
      shortName: "TUE",
      name: "Tuesday",
    },
    {
      shortName: "WED",
      name: "Wednesday",
    },
    {
      shortName: "THU",
      name: "Thuesday",
    },
    {
      shortName: "FRI",
      name: "Friday",
    },
    {
      shortName: "SAT",
      name: "Saturday",
    },
    {
      shortName: "SON",
      name: "Sunday",
    },
  ];
  const foodTypeNames = ["Breakfast", "Lunch", "Dinner"];

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayFoodTime, setSelectedDayFoodTime] = useState(null);
  const [selectedList, setSelectedList] = useState(null);

  const changeDay = (dayName) => {
    setSelectedDay(dayName);
    setSelectedDayFoodTime(null);
  };

  const closeWeekPlan = () => {
    setSelectedDay(null);
    setSelectedDayFoodTime(null);
  };

  const deleteWeekRecipes = () => {
    alert("Recipes are removed!");
  };

  const sendWeekRecipes = () => {
    alert("Recipes where added to the selected list!");
  };

  useEffect(() => {
    getUserWeek.request();
  }, []);

  return (
    <div className="weekPlanContainer">
      <div className="weekDaysScollContainer">
        <div className="yourWeekText">
          <p>Your week</p>
        </div>
        <div className="weekDaysScollContent">
          {dayNames.map((dayName) => (
            <DayComponent
              key={dayName.name}
              dayName={dayName}
              onClick={changeDay}
              selectedDay={selectedDay}
            />
          ))}
          <WeekButtonComponent
            name={"send"}
            icon={<FiSend className="icon" />}
            onClick={sendWeekRecipes}
          />
          <WeekButtonComponent
            name={"delete"}
            icon={<FiTrash className="icon" />}
            onClick={deleteWeekRecipes}
          />
        </div>
        <div className="weekDaysSmallList">
          <p>Current List:</p>
          <p>{selectedList}</p>
          <FiEdit2 />
        </div>
      </div>

      {selectedDay ? (
        <div className="weekDayFoodTimeContainer">
          <p className="selectedDayName">{selectedDay}</p>
          <div className="weekDayFoodTimeButtonContainer">
            {foodTypeNames.map((foodTypeName) => (
              <FoodTimeComponent
                key={foodTypeName}
                name={foodTypeName}
                onClick={setSelectedDayFoodTime}
                selectedFoodTime={selectedDayFoodTime}
              />
            ))}
          </div>

          {selectedDayFoodTime ? (
            <div className="weekDayFoodTimeRecipeContainer">
              <p className="description">Recipes</p>
              {getUserWeek.loading ? (
                <p>loading...</p>
              ) : (
                userWeek?.week.map((day) => {
                  if (day.name == selectedDay.toString().toLowerCase()) {
                    switch (selectedDayFoodTime) {
                      case "Breakfast":
                        return day.breakfast.map((recipe) => {
                            console.log(recipe);
                            return (
                              <DayRecipe
                                key={recipe._id}
                                recipeName={recipe.recipeName}
                                recipeGarnishName={recipe.garnish}
                                recipePictureUrl={recipe.recipePictureUrl}
                              />
                            );
                          });
                      case "Lunch":
                        return day.lunch.map((recipe) => {
                          console.log(recipe);
                          return (
                            <DayRecipe
                              key={recipe._id}
                              recipeName={recipe.recipeName}
                              recipeGarnishName={recipe.garnish}
                              recipePictureUrl={recipe.recipePictureUrl}
                            />
                          );
                        });
                      case "Dinner":
                        return day.dinner.map((recipe) => {
                            console.log(recipe);
                            return (
                              <DayRecipe
                                key={recipe._id}
                                recipeName={recipe.recipeName}
                                recipeGarnishName={recipe.garnish}
                                recipePictureUrl={recipe.recipePictureUrl}
                              />
                            );
                          });
                      default:
                        break;
                    }
                  }

                  return;
                })
              )}
              <AddDayRecipe></AddDayRecipe>
            </div>
          ) : null}

          <FiChevronsUp
            onClick={closeWeekPlan}
            className="weekFoodTimeCloseButton"
          />
        </div>
      ) : null}
    </div>
  );
};

export default WeekPlanComponent;
