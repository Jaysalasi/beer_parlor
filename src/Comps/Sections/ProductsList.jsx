import React from 'react'
import whiskey from '../../images/beer1.png'

import cart from '../../images/cart.png'

export const ProductsList = (props) => {
  return (
    <div className=''>
        <div className=''>
            <div className='bg-white rounded-lg px-6 py-12  text-center '>
              <div className='flex justify-center'>
            <img src={whiskey} alt='product' width={200} className='' />
              </div>
            <p className='align-center prod pb-2'>{props.product.name}</p>
            <p className=''>${props.product.price}</p>
            <div className='flex justify-center'>
            <button className='border flex justify-center items-center border-black sm:px-2 px-8 font-medium py-2 rounded-lg sm:text-sm'> <img src={ cart } alt="cart"  className='w-[20%]' /> Add to cart</button>
            </div>
            </div>
        </div>
    </div>
  )
}
