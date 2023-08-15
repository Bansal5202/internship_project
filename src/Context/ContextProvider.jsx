import React, { useState } from "react";
import { createContext } from "react";
export const Context = createContext(null);

function ContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(true);
  return (
    <Context.Provider
      value={{ isLogin, setIsLogin, isSignup, setIsSignup, form, setForm }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;