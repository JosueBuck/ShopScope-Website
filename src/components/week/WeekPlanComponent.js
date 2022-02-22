import { useState } from "react";
import DayComponent from "./DayComponent";
import FoodTimeComponent from "./FoodTimeComponent";
import { FiChevronsUp, FiSend, FiTrash, FiEdit2 } from "react-icons/fi";
import DayRecipe from "../recipe/DayRecipe";
import AddDayRecipe from "../recipe/AddDayRecipeComponent";
import WeekButtonComponent from "./WeekButtonComponent";

const WeekPlanComponent = () => {

    const dayNames = [
        {
            shortName: 'MON',
            name: 'Monday'
        },
        {
            shortName: 'TUE',
            name: 'Tuesday'
        },
        {
            shortName: 'WED',
            name: 'Wednesday'
        },
        {
            shortName: 'THU',
            name: 'Thuesday'
        },
        {
            shortName: 'FRI',
            name: 'Friday'
        },
        {
            shortName: 'SAT',
            name: 'Saturday'
        },
        {
            shortName: 'SON',
            name: 'Sunday'
        }
    ];
    const foodTypeNames = ['Breakfast', 'Lunch', 'Dinner'];

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedDayFoodTime, setSelectedDayFoodTime] = useState(null);
    const [selectedList, setSelectedList] = useState(null);

    const changeDay = (dayName) => {
        setSelectedDay(dayName);
        setSelectedDayFoodTime(null);
    }

    const closeWeekPlan = () => {
        setSelectedDay(null);
        setSelectedDayFoodTime(null);
    }

    const deleteWeekRecipes = () => {
        alert('Recipes are removed!');
    }

    const sendWeekRecipes = () => {
        alert('Recipes where added to the selected list!');
    }


    return (
        <div className='weekPlanContainer'>
            <div className="weekDaysScollContainer">
                <div className="yourWeekText">
                    <p>Your week</p>
                </div>
                <div className="weekDaysScollContent">
                    {dayNames.map(dayName => (
                        <DayComponent key={dayName.name} dayName={dayName} onClick={changeDay} selectedDay={selectedDay} />
                    ))}
                    <WeekButtonComponent name={'send'} icon={<FiSend className="icon" />} onClick={sendWeekRecipes} />
                    <WeekButtonComponent name={'delete'} icon={<FiTrash className="icon" />} onClick={deleteWeekRecipes} />
                </div>
                <div className="weekDaysSmallList">
                        <p>Current List:</p>
                        <p>{selectedList}</p>
                        <FiEdit2 />
                </div>
            </div>

            {
                selectedDay ?

                    <div className="weekDayFoodTimeContainer">

                        <p className="selectedDayName">{selectedDay}</p>
                        <div className="weekDayFoodTimeButtonContainer">
                            {foodTypeNames.map(foodTypeName => (
                                <FoodTimeComponent key={foodTypeName} name={foodTypeName} onClick={setSelectedDayFoodTime} selectedFoodTime={selectedDayFoodTime} />
                            ))}
                        </div>

                        {
                            selectedDayFoodTime ?

                                <div className="weekDayFoodTimeRecipeContainer">
                                    <p className="description">Recipes</p>
                                    <DayRecipe recipeName={'testRecipe'} recipeGarnishName={'testRecipeGarnish'} />
                                    <DayRecipe recipeName={'testRecipe'} recipeGarnishName={'testRecipeGarnish'} />
                                    <DayRecipe recipeName={'testRecipe'} recipeGarnishName={'testRecipeGarnish'} />
                                    <AddDayRecipe></AddDayRecipe>
                                </div>
                                : null
                        }

                        <FiChevronsUp onClick={closeWeekPlan} className="weekFoodTimeCloseButton" />

                    </div>
                    : null
            }



        </div>
    )
}

export default WeekPlanComponent
