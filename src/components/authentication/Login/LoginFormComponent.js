import React, { useState } from "react";
import InputComponent from "../InputComponent";
import AuthenticationInfoComponent from "../AuthenticationInfoComponent";
import { FiUser, FiKey, FiSend, FiXCircle } from "react-icons/fi";
import SubmitButtonComponent from "../SubmitButtonComponent";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import useApi from "../../../api/useApi";
import authenticationApi from "../../../api/authentication";

const LoginFormComponent = () => {
  const { setAuth } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showUserMessage, setShowUserMessage] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const navigate = useNavigate();

  /*   const getUserTokens = useApi(() =>
    authenticationApi.login(
        JSON.stringify({
            username: username,
            password: password
        }),
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    ).then(response => {
        console.log(response);
    })
  ); */

  const submit = async () => {
    const loginResponse = await fetch(
      `http://${process.env.REACT_APP_LOCAL_IP}:8080/user/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    )
      .then(async (response) => {
        const responseJson = await response.json();
        if (response.ok) {
          const user = responseJson.responseData.user;
          const accessToken = responseJson.responseData.jwt;
          console.log("accessToken", accessToken);
          setAuth({ username, password, user, accessToken });
          console.log(responseJson);
          return responseJson;
        } else {
          setUserMessage(responseJson.message);
          setShowUserMessage(true);
        }
      })
      .catch((error) => {
        setUserMessage(error);
        setShowUserMessage(true);
      });

    clearInputs();
    if (loginResponse != false) {
      navigate("/Home");
    }
  };

  return (
    <div className="loginFormContainer">
      {showUserMessage ? (
        <AuthenticationInfoComponent
          info={userMessage}
          icon={<FiXCircle />}
          onClick={setShowUserMessage}
        />
      ) : null}

      <div className="allInputsLoginContainer">
        <InputComponent
          onChange={setUsername}
          value={username}
          placeholder={"Username"}
          icon={<FiUser className="icon" />}
        />
        <InputComponent
          onChange={setPassword}
          value={password}
          placeholder={"Password"}
          icon={<FiKey className="icon" />}
        />
      </div>

      <SubmitButtonComponent
        onClick={submit}
        icon={<FiSend className="icon" />}
      />
    </div>
  );
};

export default LoginFormComponent;
