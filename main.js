import React, { createContext, useContext } from "react";

const HooksContext = createContext();

export const ContextProvider = ({ children, value }) => {
    return <HooksContext.Provider value={value}>{children}</HooksContext.Provider>;
};

export const useValue = () => {
    const value = useContext(HooksContext);
    return value;
};
