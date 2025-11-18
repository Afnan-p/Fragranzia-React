import React from 'react'
import "./ExploreCategories.css";
import { Link } from 'react-router-dom';

export const ExploreCategories = () => {
  
  return (
    <>
         <div className='Explore-Headings flex justify-between items-center px-4 mb-6 '>
             <div>
       <h2 style={{ fontSize: '35px' }}><b>Explore Categories</b></h2>
        </div>
    <div> <h2 style={{ fontSize: '35px', cursor:'pointer'}}><b><Link to="/products">See All</Link></b></h2>
     </div>
        </div>
   
     <div className='Home-Explore-Categories  mb-10  '>
   
  
 
{/* {data.map((product)=>(
  <div key={product.id} className='Explore-Category-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg 'style={{width:'300px'}}></div>
))} */}

  <div className='Catagories'></div>
<div className='Catagories'></div>
<div className='Catagories'></div>
<div className='Catagories'></div>
<div className='Catagories'></div>  
</div>
</>

  )
}
