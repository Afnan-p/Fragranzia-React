
import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth,setAuth]=useState({})
    const  accessToken = localStorage.getItem("accessToken")
    // const  role = localStorage.getItem("role")



    if(accessToken && !auth.accessToken){
        setAuth({accessToken})
    }
 
  return (
    <Authcontext.Provider value={{ auth,setAuth}}>
      {children}
    </Authcontext.Provider>
  );
};