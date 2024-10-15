import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import AWS from "aws-sdk";
import Pool from "./UserPool";

const AccountContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const Account = (props) => {
  const navigate = useNavigate();

  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject();
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }

                  resolve(results);
                }
              });
            });

            const token = session.getIdToken().getJwtToken();

            AWS.config.region = process.env.REACT_APP_AWS_REGION;
            const poolUrl = `cognito-idp.${AWS.config.region}.amazonaws.com/${process.env.REACT_APP_COGNITO_USER_POOL_ID}`;
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL,
              Logins: {
                [poolUrl]: token,
              },
            });
            AWS.config.credentials.clearCachedId();
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL,
              Logins: {
                [poolUrl]: token,
              },
            });

            // refresh credentials
            AWS.config.credentials.refresh((err) => {
              if (err) {
                console.error("Failed To Login:", err);
              } else {
                console.log("Credentials are refreshed");
              }
            });
            resolve({
              user,
              headers: {
                Authorization: token,
                "x-api-key": attributes["custom:apikey"],
              },
              ...session,
              ...attributes,
            });
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          alert(err);
          reject(err);
        },
      });
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      navigate("/");
    }
  };

  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        signedIn,
        setSignedIn,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };