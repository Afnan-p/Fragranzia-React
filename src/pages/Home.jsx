import React, { useContext, useEffect, useState } from 'react'
import { HeroSlider } from '../components/HeroSlider'
import { Header } from '../components/Header'
import "./Home.css";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import Bottle1 from "../assets/bottle5.jpg";
import Bottle2 from "../assets/bottle6editted.png";
import Bottle3 from "../assets/bottle7editted.png";
import Sticker from "../assets/Group 1.png";
import Img1 from "../assets/limitedediton.jpg";
import Img2 from "../assets/newarivals.png";
import Img3 from "../assets/bestseller.png";
import Iconic from "../assets/lastbackground.webp";
import { FaStar } from "react-icons/fa";
// import './variables.css';
// import './global.css';



import { FeaturedCollection } from '../components/FeaturedCollection';
import { ExploreCategories } from '../components/ExploreCategories';
import { Footer } from '../components/Footer';
import { Product } from './Product';
import { AddToCart } from './AddToCart';
import { Maincontext } from '../context/Maincontext';
import { Cartcontaxt } from '../context/Cartcontext';


export const Home = () => {
  const {handleAddToCart} =useContext(Cartcontaxt);
  const {data,setData} =useContext(Maincontext);


// const {data,setData}=useContext(Maincontext);
//       useEffect(() => {
//         fetch('https://fakestoreapi.com/products?limit=10')
//           .then(res => res.json())
//           .then(json => setData(json))
//         // .catch(err => console.log('Error fetching data:', err));
//       }, []);
//       // console.log(data,"dataaaa");
      
  return (

    <>
      <Header />
      <div className='Blue-Line '>
        <p>ENJOY FESTIVE DISCOUNTS!FREE SHIPPING ABOVE 999!</p>
      </div>
      <HeroSlider />



      <div className="Special-deals px-4 py-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 ">

          <div className="Offer-Boxes1 flex justify-between">
            <div>
              <h2 className="font-semibold">Unlock Exclusive Offers</h2>
              <p>Discover special deals tailored just for you!</p>
            </div>
            <div>
              <img className='Home-Bottle1' src={Bottle1} alt="" /></div>

          </div>

          <div className="Offer-Boxes2  " style={{ position: 'relative', width: 'auto' }}>
            <div>
              <h4 className="font-semibold">Gift Scents to Your Loved Ones</h4>
              <p>Make your moments more beautiful</p>
            </div>
            {/* <div className='Home-Bottle2' style={{ position: 'absolute', top: '30px', left: '60px' }}> <img src={Bottle2} alt="" />
            </div> */}
          </div>

          <div className="Offer-Boxes3">
            <div> <h4 className="font-semibold">Luxury Scents Starting at $4,000</h4>
            </div>

            {/* <div className='flex'>
              <img className='Sticker' src={Sticker} alt="" />
              <img className='Home-Bottle3' src={Bottle3} alt="" />
            </div> */}
          </div>
        </div>
      </div>





      <div className='Provide-content flex justify-between items-center  gap-6 '>
        <div className='flex gap-5'>
          <FaTruckFast size={35} />
          <div>
            <h3 style={{ fontSize: '25px' }}><b>Fast&Reliable Delivery</b></h3>
            <p>Get your orders delivered on time,every time</p></div>
        </div>
        <div className='flex gap-5'>
          <RiSecurePaymentFill size={35} />
          <div>
            <h3 style={{ fontSize: '25px' }}><b>Secure Payments</b></h3>
            <p>Shop with Confidence using our  encrypted Payments gateways.</p></div>
        </div>
        <div className='flex'>
          <RiCustomerService2Fill size={35} />
          <div>
            <h3 style={{ fontSize: '25px' }}><b>24/7 Customer Support</b></h3>
            <p>Get your orders delivered on time,every time</p>
          </div>
        </div>
      </div>

<FeaturedCollection setData={setData} data={data}/>



<div className="text text-center " style={{ fontSize: '25px' ,fontWeight:'500', marginTop:'50px' }}>
  <p>"It's an art. A craft. A science. At Fragranzia, we're in <br />
    the business of creating memories that last forever <br />
     through our fragrances."</p>
</div>


<div className='Home-New flex justify-center gap-6 mt-10 mb-10  'style={{position:'relative',color:'white'}}>
  <div className=''>
    <img src={Img2} alt="" style={{ height: '400px', width: '300px'}}/>
 <div className="rotatetext1" ><p>New Arrivals</p>
 </div>
 </div>
  <div className=''>
   <img src={Img1} alt=""style={{ height: '400px',width: '300px', }} />
  <div className="rotatetext1" ><p>Limited Edition</p>
 </div>
 </div>
  <div>
    <img src={Img3} alt="" style={{ height: '400px',width: '300px',  }}/>
  <div className="rotatetext1" ><p>Best Sellers</p>
 </div> </div>
</div>

<ExploreCategories/>


<div className='Home-Offerzone'>
   <h2 style={{ fontSize: '35px' }}><b>Offer Zone</b></h2>
          <div className='Home-Offerzone flex overflow-x-scroll '>
            {data.map((product) => (
              <div key={product.id}>
                <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg 'style={{width:'400px'}}>
                  <div className='flex gap-3 mt-3 '>
                    <img className='product-image p-3' src={product.image} alt="" style={{ height: '150px', objectFit: 'contain' ,width: '150px'}} />
  
                    <div>
                      <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                      <p className='product-description'>{product.description.slice(0, 30)}...</p>
                      <p className="card-text ">{product.category}</p>
                      <h6>Rs {product.price }/-</h6>
                    </div>
                  </div>
                  <div className='rating-stars flex px-3  gap-1 ' >
                    {Array.from({ length: 5 }).map((v, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className=' p-3 '>
                  <button className="Home-AddCart-btn w-full  mt-2 " onClick={() => handleAddToCart(product.id)}>
                     Add to Cart
                  </button>
                  </div>
                </div>
  
              </div>
            ))}
          </div>
</div>

<div className='Home-iconic-Product'>
  <div className='iconic-card' style={{position:'relative'}}>
    <img src={ Iconic } alt="" className='iconic-img  ' />
    <div style={{position:'absolute',top:'70px',left:'70px'}}>
      <h2 style={{fontSize:'30px',fontWeight:'bold'}}>Elegance in Every Bottle</h2>
    <p style={{fontSize:'20px'}}>Discover Timeless Fragrances crafted for every moment.</p>
    <button className='Home-iconic-btn mt-6 'style={{cursor:'pointer'}}>Shop Now</button>
    </div>
    
  </div>
</div>
<Footer/>

{/* <Product/> */}

{/* <AddToCart/> */}

    </>

  )
}
