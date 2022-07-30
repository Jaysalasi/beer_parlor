import React, { useState } from 'react'

export const Logo = () => {
    const [nav, setNav] = useState(false);
    // bg scroll color
    const changeBg = () => {
        if(window.scrollY >= 80) {
            setNav(true) 
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBg)
    
  return (
    <nav className={nav ? 'nav active fixed pl-8 py-4 text-black font-light': 'nav fixed pl-12 py-8 text-white logo text-3xl font-light'}>
        <div className={nav ?'flex justify-between': 'flex'}>
        <div>
        <h1 className='text-3xl logo'>Beer Parlor</h1>
        </div>
        
        <div className={nav ? ' text-center align-center inset-x-0 mx-12 mb-2 text-black sm:hidden lg:block md:block': ' text-center align-center inset-x-0 hidden mx-80 mb-2'}>
        <ul className='flex  py-2'>
            <li className='px-4  bg-orange'>Home</li>
            <li className='px-4'>About us</li>
            <li className='px-4'>Store</li>
            <li className='px-4'>Contact</li>
        </ul>
        </div>
        <div className={nav ? ' text-center align-center inset-x-0 mx-12 mb-2 text-black lg:hidden': ' text-center align-center inset-x-0 hidden mx-80 mb-2'}>
        <p>X</p>
        </div>
        </div>
    
    </nav>
  )
}
