import React, { createContext, useEffect, useState } from "react";

// Create the context
export const MyContext = createContext(null);

// Create the provider component
export const ContextProvider = ({ children }) => {
 
  
  return (
    <MyContext.Provider value={{  }}>
      {children}
    </MyContext.Provider>
  );
};
