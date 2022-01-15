import { useState } from "react";
import InputComponent from "./InputComponent";
import SubmitButtonComponent from "./SubmitButtonComponent";
import InfoComponent from "./InfoComponent";
import { FiUser, FiKey, FiMail, FiToggleLeft, FiToggleRight, FiSend, FiXCircle } from "react-icons/fi";

const RegisterFormComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showUserMesssage, setShowUserMessage] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
        setPassword('');
    }

    const submit = async () => {

        await fetch(`http://${process.env.REACT_APP_LOCAL_IP}:8080/user/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                username: username,
                password: password,
                email: email
            })
        })
            .then(async (response) => {

                const responseJson = await response.json();
                if (response.ok) {
                    clearInputs();
                    return responseJson;
                }
                else {
                    setUserMessage(responseJson.message);
                    setShowUserMessage(true);
                }
            })

    }


    return (
        <div className="registerFormContainer">

            {
                showUserMesssage ? <InfoComponent info={userMessage} icon={<FiXCircle />} onClick={setShowUserMessage} /> : null
            }
            <div className="allInputsContainer">
                <InputComponent onChange={setFirstName} value={firstName} placeholder={'First Name'} icon={<FiToggleLeft className="icon" />} />
                <InputComponent onChange={setLastName} value={lastName} placeholder={'Last Name'} icon={<FiToggleRight className="icon" />} />
                <InputComponent onChange={setUsername} value={username} placeholder={'Username'} icon={<FiUser className="icon" />} />
                <InputComponent onChange={setEmail} value={email} placeholder={'Email'} icon={<FiMail className="icon" />} />
                <InputComponent onChange={setPassword} value={password} placeholder={'Password'} icon={<FiKey className="icon" />} />

            </div>

            <SubmitButtonComponent onClick={submit} icon={<FiSend className="icon" />} />

        </div>
    )
}

export default RegisterFormComponent
