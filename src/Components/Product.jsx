import { addToCart } from '../redux/reducer/cart';
import React, { useState } from 'react'
import { FaStar} from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import {FaShoppingCart, FaCheck} from 'react-icons/fa'
import { useDispatch } from 'react-redux';




function Rate({rate}) {

    return (
        <div>
            {
                rate === 5 ? (
                    <div className='flex gap-2 text-amber-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar  />
                    </div>
                )
                : (
                   <div className='flex gap-1 text-amber-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                )
            }
        </div>
    )

}


function Product({product}) {
    const [isOrdered, setIsorder] = useState(false);
    const dispatch = useDispatch();

    const handleCLick = () => {
        setIsorder(!isOrdered);

        dispatch(addToCart(product))
    }
  return (
    <div className='flex flex-col justify-center mt-10 mb-10 items-center border-gray-200 
    rounded-3xl bg-white shadow-2xl'>
        
        <div className='w-36 h-36 grid place-items-center my-4 rounded-full bg-black/20'>
            <img className='w-32' src={product.img} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-3 mt-4'>{product.title}</h2>
            <h5 className='font-thin text-lg mb-2 mt-2'>{product.category}</h5>
            <div className='mb-3 mt-3'>
                {
                   <Rate rate={product.rate} /> 
                }
            </div>
            <h4 className='font-bold text-lg mb-5 mt-3'>${product.price}</h4>
        </div>
        <button className='py-2 flex gap-2  justify-center items-center rounded-3xl bg-blue text-white 
        hover:bg-black mb-5 mt-5 w-48 '
        onClick={handleCLick}>
           {
                isOrdered ? <FaCheck /> : <FaShoppingCart />

           }
           {
                !isOrdered ? "Add To Cart" : "View Cart"
           }
        </button>
    </div>
  )
}

export default Product
