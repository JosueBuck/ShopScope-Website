
const FoodTimeComponent = ({name, onClick, selectedFoodTime}) => {

    return (
        <div className={name === selectedFoodTime ? "foodTimeContainer selectedFoodTimeContainer" : "foodTimeContainer"} onClick={() => {onClick(name)}}>
            <p>{name}</p>
        </div>
    )
}

export default FoodTimeComponent
