import React, { useState } from 'react'

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
    <div className={bottomNav? 'container mx-auto relative hidden' : 'container mx-auto relative'}>
        <div className=' fixed bottom-0 rounded-full text-center bnbg align-center inset-x-0 bottom-0 mx-96 mb-12'>
        <ul className='flex justify-center text-white py-2'>
            <li className='px-4  bg-orange'>Home</li>
            <li className='px-4'>About us</li>
            <li className='px-4'>Store</li>
            <li className='px-4'>Contact</li>
        </ul>
        </div>
    </div>
  )
}
