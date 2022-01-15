import React, { useState } from "react";
import InputComponent from "./InputComponent"
import InfoComponent from "./InfoComponent";
import { FiUser, FiKey, FiSend, FiXCircle } from "react-icons/fi";
import SubmitButtonComponent from "./SubmitButtonComponent";

const LoginFormComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showUserMessage, setShowUserMessage] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    const clearInputs = () => {
        setUsername('');
        setPassword('');
    }

    const submit = async () => {

        await fetch(`http://${process.env.REACT_APP_LOCAL_IP}:8080/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(async (response) => {
                clearInputs();
                const responseJson = await response.json();
                if (response.ok) {
                    console.log(responseJson);
                    return responseJson;
                }
                else {
                    setUserMessage(responseJson.message);
                    setShowUserMessage(true);
                }
            })
    }

    return (
        <div className="loginFormContainer">
            {
                showUserMessage ? <InfoComponent info={userMessage} icon={<FiXCircle />} onClick={setShowUserMessage} /> : null
            }

            <InputComponent onChange={setUsername} value={username} placeholder={'Username'} icon={<FiUser className="icon" />} />
            <InputComponent onChange={setPassword} value={password} placeholder={'Password'} icon={<FiKey className="icon" />} />
            <SubmitButtonComponent onClick={submit} icon={<FiSend className="icon" />} />
        </div>
    )
}

export default LoginFormComponent
