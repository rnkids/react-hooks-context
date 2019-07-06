import React, { createContext, useContext } from "react";

export const HooksContext = createContext();

export const GameProvider = ({ children, value }) => {
    return <HooksContext.Provider value={value}>{children}</HooksContext.Provider>;
};

export const useValue = () => {
    const value = useContext(HooksContext);
    return value;
};
