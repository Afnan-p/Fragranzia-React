import React from 'react'
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-Contents  flex justify-around gap-30 py-10 border-b-1 ">
            <div className="Footer-Heading">
                <h1 style={{fontSize:'40px',fontWeight:'bold',color:' #0d2a46'}}>Fragranzia</h1>
                </div>
                <div className="Footer-Link-Sections flex gap-30 ">
                <div className="pages flex flex-col">
                    <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Pages</h1>
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Gifting</a> 
                    <a href="">About</a> 
                    <a href="">profile</a> 
                </div>
                <div className="Quick-links  flex flex-col">
                    <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Quick-links </h1>
                    <a href="">Privacy policy</a>
                    <a href="">Terms and conditions</a>
                    <a href="">FAQs</a>
                    <a href="">Customer Service</a>
                    <a href="">qwertyu@gmail.com</a>
                    <a href="">+9400653289</a>
                </div>
                <div className="socialmedia  flex flex-col items-center">
                    <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Socialmedia</h1>
                    <a href=""><CiInstagram size={30} /></a>
                    <a href=""><CiFacebook size={30} /></a>
                    <a href=""><CiTwitter size={30} /></a>
                    <a href=""><CiLinkedin size={30} /></a> 
                </div>
                </div>
            
        </div>
        <div>
        <p className='text-center py-4'>© 2024 Fragranzia. All rights reserved.</p>
        </div>

    </div>
  )
}
