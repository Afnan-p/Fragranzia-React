import React, { createContext, useState } from 'react'


export const Maincontext=createContext();
export const Mainprovider = ({children}) => {
         const [data, setData] = useState([]);
  return (
    // <div>Maincontext</div>
    <Maincontext.Provider value={{data,setData}}>
    {children}
    </Maincontext.Provider> 
  )
}
