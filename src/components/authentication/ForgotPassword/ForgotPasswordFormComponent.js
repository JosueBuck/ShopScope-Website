import React, { useState } from "react";
import InputComponent from "../InputComponent"
import InfoComponent from "../InfoComponent";
import { FiSend, FiMail, FiXCircle } from "react-icons/fi";
import SubmitButtonComponent from "../SubmitButtonComponent";

const ForgotPasswordFormComponent = () => {

    const [email, setEmail] = useState('');

    const [showUserMessage, setShowUserMessage] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    const clearInputs = () => {
        setEmail('');
    }

    const submit = () => {
        clearInputs();
        setUserMessage('If we have an account registered with this email, we will send a reset mail it.');
        setShowUserMessage(true);
        console.log('Reset password!')
    }

    return (
        <div className="forgotPasswordFormContainer">

            {
                showUserMessage ? <InfoComponent info={userMessage} icon={<FiSend />} icon={<FiXCircle />} onClick={setShowUserMessage} /> : null
            }

            <div className="allInputsForgotPasswordContainer">
                <InputComponent onChange={setEmail} value={email} placeholder={'Your email.'} icon={<FiMail className="icon" />} />
            </div>

            <SubmitButtonComponent onClick={submit} icon={<FiSend className="icon"/>} />
            
        </div>
    )
}

export default ForgotPasswordFormComponent
