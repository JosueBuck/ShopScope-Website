const InputComponent = ({icon, value, placeholder, onChange}) => {

    const handleInput = (event) => {
        const input = event.target.value;
        onChange(input);
    }

    return (
        <div className="inputContainer">
            <input type="text" value={value} placeholder={placeholder} onChange={handleInput} />
            {icon}
        </div>
    )
}

export default InputComponent
