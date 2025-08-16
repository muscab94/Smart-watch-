import React from 'react'
import { FaStar} from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'


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
  return (
    <div className='flex flex-col justify-center items-center border-2 border-gray-200 
    rounded-3xl shadow-md'>
        <div className='w-36 h-36 grid place-items-center my-4 rounded-full bg-black/20'>
            <img className='w-32' src={product.img} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-1'>{product.title}</h2>
            <h5 className='font-thin text-lg mb-1'>{product.category}</h5>
            <div className='mb-2'>
                {
                   <Rate rate={product.rate} /> 
                }
            </div>
            <h4 className='font-bold text-lg mb-2'>${product.price}</h4>
        </div>
        <button className='py-2 flex gap-2 justify-center items-center rounded-3xl bg-blue text-white 
        hover:bg-black mb-2 w-48 text-xl'>
            <FaShoppingCart /> Add To Cart
        </button>
    </div>
  )
}

export default Product
