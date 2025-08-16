import React from 'react'
import { FaStar} from 'react-icons/fa'


function Rate({rate}) {

    return (
        <div>
            {
                rate === 5 ? (
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                )
                : (
                   <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                )
            }
        </div>
    )

}


function Product({product}) {
  return (
    <div className='flex flex-col justify-center items-center border-2 border-black/25 
    rounded-3xl shadow-md'>
        <div>
            <img className='w-32' src={product.img} alt="" />
        </div>
        <div>
            <h2>{product.title}</h2>
            <h5>{product.category}</h5>
            <div>
                {
                   <Rate rate={product.rate} /> 
                }
            </div>
            <h4>${product.price}</h4>
        </div>
        <button>Add To Cart</button>
    </div>
  )
}

export default Product
