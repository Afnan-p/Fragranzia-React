import React, { createContext, useEffect, useState } from 'react'
const API_URL = "http://localhost:5000/api/product";

export const Maincontext=createContext();
export const Mainprovider = ({children}) => {
  
         const [data, setData] = useState([]);
          
                   useEffect(() => {
                     fetch("http://localhost:5000/api/product")
                       .then(res => res.json())
                       .then(json => setData(json))
                     // .catch(err => console.log('Error fetching data:', err));
                   }, []);
  return (
    // <div>Maincontext</div>
    <Maincontext.Provider value={{data,setData}}>
    {children}
    </Maincontext.Provider> 
  )
}
