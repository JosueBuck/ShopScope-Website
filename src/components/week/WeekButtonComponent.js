
const WeekButtonComponent = ({name, onClick, icon}) => {

    return (
        <div className={name === "delete" ? "deleteWeekRecipesButton dayContainer" : "sendWeekRecipesButton dayContainer"} onClick={() => {onClick()}}>
            {icon}
        </div>
    )
}

export default WeekButtonComponent
