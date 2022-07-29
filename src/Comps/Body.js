import React from 'react'
import Products from './Products'
import { ProductsList } from './ProductsList'
// import whiskey from '../images/beer1.png'

export const Body = () => {
    const productsElements = Products.map(product => {
        return <ProductsList 
        key={product.id} 
        product={product} 
        />
    })
    // console.log(productsElements)
  return (
    <div className='body-sect'>
    <div className='container py-24 '>
        <div className='flex justify-center txt-lg pb-24' >
            <h1 className='text-black'>Latest &nbsp;</h1>  <h1 className='cl-orange text-orange'>Products</h1>

        </div>
        
        {/* <div className='grid grid-cols-4 gap-4 pt-12'>
            <div className='bg-white rounded-lg pt-6 pb-6 text-center'>
            <div>
            <img src={whiskey} alt='product' />
            </div>
            <div>
            <p className='align-center prod pb-2'>Whiskey</p>
            </div>
            <p className=''>$12.4</p>
            <button className='border border-black px-8 font-medium py-2 rounded-lg'>Add to cart</button>
            </div>
        </div> */}
            <div className='flex justify-around'>
                {productsElements}
            </div>
    </div>
    </div>
  )
}
