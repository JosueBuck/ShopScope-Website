const SubmitButtonComponent = ({icon, onClick}) => {
    return (
        <div className="submitButtonContainer" onClick={onClick}>
            {icon}
        </div>
    )
}

export default SubmitButtonComponent
