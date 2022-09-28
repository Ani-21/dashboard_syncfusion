import React, { createContext, useContext, useState } from "react";

// create context
const StateContext = createContext();

// init state
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// provider
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  // theme settings
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  // if sidebar is opened or closed
  const [themeSettings, setThemeSettings] = useState(false);

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
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// customize context
export const useStateContext = () => useContext(StateContext);
