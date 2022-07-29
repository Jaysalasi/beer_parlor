import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-black py-24 '>
        <div className='text-white flex justify-around' >
            <div>
                <h1 className='text-2xl font-medium uppercase pb-8'>About Us</h1>
                <p>Blog</p>
                <p>Delivery</p>
            </div>
            <div>
                <h1 className='text-2xl font-medium uppercase pb-8'>Contact</h1>
                <p>contact@beerparlor.com</p>
                <p>+234 0912 345 6789</p>
            </div>
            <div>
                <h1 className='text-2xl font-medium uppercase pb-8'>Open Hours</h1>
                <p>Mondays - Fridays</p>
                <p>7am - 5pm</p>
            </div>
            <div>
                <h1 className='text-2xl font-medium uppercase pb-8'>Customer Care</h1>
                <p>What is</p>
                <p>this?</p>
            </div>
        </div>
        <div className='flex justify-center text-white pt-24'>
            <h1 className='text-2xl font-medium uppercase'>Newsletter &nbsp;</h1>
            <input className='bg-black border border-white rounded-sm' placeholder=' Email' />
        </div>
        <div className='text-white text-center pt-12'>
            <p>Socials</p>
        </div>
    </div>
  )
}