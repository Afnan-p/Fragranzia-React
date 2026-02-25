import React, { useContext, useEffect, useState } from 'react'
import '../product/Product.css'
import { FaStar } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
{/* <IoIosArrowForward /> */ }
import { IoFilter } from "react-icons/io5";
import { Footer } from '../../../components/Footer';
import { Link } from "react-router-dom";
import { Cartcontaxt } from '../../../context/Cartcontext';
import { Header } from '../../../components/Header';
import { Maincontext } from '../../../context/Maincontext';
import { Wishlistcontaxt } from '../../../context/Wishlistcontext';
import { FaHeart, FaRegHeart } from "react-icons/fa6";



export const Product = () => {
  //  const [data, setData] = useState([]);
  const { handleAddToCart } = useContext(Cartcontaxt);
  const { data, setData } = useContext(Maincontext);
  const { hundlewishlist, likedList } = useContext(Wishlistcontaxt);





  return (
    <>
      <Header/>
      <div className='Blue-Line mt-5'>
        <p>ENJOY FESTIVE DISCOUNTS!FREE SHIPPING ABOVE 999!</p>
      </div>

      <div className="All-products flex  justify-around items-center gap-50 px-4 py-6 ">
        <div className="Heading flex flex-col gap-5 ">
          <h2 style={{ fontSize: '35px' }}><b>All products</b></h2>
          <div style={{ fontSize: '20px', direction: 'none' }} className='flex gap-3 '>

            <p><Link to="/">Home</Link></p>
            <p><Link to="/products">Product</Link></p>
          </div>

        </div>
        <div className="Product-Sorting  flex  gap-5 items-center " style={{ fontSize: '20px' }}>
          <div> <p>Sort by:</p></div>
          <div className='Sort-Methods flex justify-center items-center gap-5  '>
            <a href="">Relevence</a>
            <a href="">Newest First</a>
            <a href="">Popularity</a>
            <a href="">Price-Low to High</a>
            <a href="">Price-High to Low</a>
            <button className='Filter-btn flex gap-3 p-4 items-center' >
              <p>Filter</p>
              <IoFilter />
            </button>
          </div>

        </div>
      </div>

      <div className='Home-Featured-Collections mt-4  '>
        {/* <h2 style={{ fontSize: '35px' }}><b>Featured Collections</b></h2> */}
        <div className='Home-Products-Slide grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
  {data.map((product) => (
    <div key={product._id}>
      <div
        className='Product-Card m-3 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300'
        style={{ position: 'relative' }}
      >
        <div className='Product-Details flex gap-3 mt-3 p-3'>
          
          <Link to={`/singleproduct/${product._id}`}>
            <img
              className='product-image'
              src={`http://localhost:5000/uploads/${product.images[0]}`}
              alt={product.name}
              style={{ height: '150px', objectFit: 'cover', width: '150px' }}
            />
          </Link>

          <div>
            <h5 className="card-title font-semibold">
              {product.name?.slice(0, 20)}...
            </h5>

            <p className='product-description text-gray-500'>
              {product.description?.slice(0, 30)}...
            </p>

            <h6 className="font-bold">
              Rs {product.price}/-
            </h6>
            <h6 className="font-bold">
              Rs {product.salePrice }/-
            </h6>
          </div>
        </div>

        {/* Wishlist Button */}
        <div
          className="Like-heart"
          style={{ position: "absolute", right: "10px", top: "10px" }}
        >
          <button
            className="Like-icon-btn"
            onClick={() => hundlewishlist(product._id)}
          >
            {likedList.includes(product._id) ? (
              <FaHeart size={22} color="red" />
            ) : (
              <FaRegHeart size={22} color="black" />
            )}
          </button>
        </div>

        {/* Rating */}
        <div className='rating-stars flex px-3 gap-1'>
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Add to Cart */}
        <div className='p-3'>
          <button
            className="Home-AddCart-btn w-full mt-2"
            onClick={() => handleAddToCart(product._id)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  ))}
</div>

      </div>
      <Footer/>
    </>
  )
}
