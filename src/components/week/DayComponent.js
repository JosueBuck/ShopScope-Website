
const DayComponent = ({dayName, onClick, selectedDay}) => {

    return (
        <div className={selectedDay === dayName.name ? "dayContainer selectedDayContainer" : "dayContainer"} onClick={() => {onClick(dayName.name)}}>
            <p>{dayName.shortName}</p>
        </div>
    )
}

export default DayComponent
