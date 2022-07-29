import React from 'react'
import whiskey from '../images/beer1.png'

export const ProductsList = (props) => {
  return (
    <div>
        <div className=''>
            <div className='bg-white rounded-lg px-6 py-6 mx-6 text-center'>
            <img src={whiskey} alt='product' width={200} />
            <p className='align-center prod pb-2'>{props.product.name}</p>
            <p className=''>${props.product.price}</p>
            <button className='border border-black px-8 font-medium py-2 rounded-lg'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
