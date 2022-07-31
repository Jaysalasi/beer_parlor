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
    <div className=' py-24 '>
        <div className='flex justify-center pb-24' >
            <h1 className='text-black text-4xl font-[700]'>Latest &nbsp;</h1>  <h1 className='bg-orange text-4xl font-[700] text-[#ff7000]'>Products</h1>

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
            <div className='grid sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 px-6'>
                {productsElements}
            </div>
    </div>
    </div>
  )
}
