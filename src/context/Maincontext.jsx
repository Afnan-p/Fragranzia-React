import React, { createContext, useEffect, useState } from 'react'


export const Maincontext=createContext();
export const Mainprovider = ({children}) => {
         const [data, setData] = useState([]);
          
                   useEffect(() => {
                     fetch('https://fakestoreapi.com/products?limit=10')
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
