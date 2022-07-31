import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const BottomNav = () => {
    const [bottomNav, setNav ] = useState(false)
    // hide bottom nav
    const hideBottomNav = () => {
        if(window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', hideBottomNav)
  return (
    <div>
    <div className={bottomNav? 'container mx-auto relative lg:hidden sm:hidden' : 'hidden sm:hidden  lg:block container mx-auto relative'}>
        <div className=' fixed bottom-0 inset-x-0 bottom-0 mx-40 mb-12 flex justify-center'>
        <ul className='flex  text-white py-2 px-12 rounded-full text-center bnbg'>
            <li className='px-4  bg-orange'><Link to='/' className='active bg-cl-orange hover:bg-[#ff7000] hover:px-2 hover:py-[2px] hover:rounded-full'>Home</Link> </li>
            <li className='px-4'><Link to='/' className='active'>About us</Link> </li>
            <li className='px-4'><Link to='/' className='active'>Store</Link> </li>
            <li className='px-4'><Link to='/' className='active'>Contact</Link> </li>
        </ul>
        </div>
    </div>
    <div className={bottomNav? 'container mx-auto relative sm:hidden' : 'hidden sm:block lg:hidden md:block container mx-auto relative'}>
        <div className='fixed bottom-0 inset-x-0 bottom-0 mx-40 mb-12 flex justify-center'>
        <div className='bnbg rounded-full px-8 py-2'>
        <p>X</p>
        </div>
        </div>
    </div>
    </div>
  )
}
