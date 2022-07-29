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
    <nav className={nav ? 'container nav active fixed pl-24 py-4 text-black logo text-3xl font-light': 'container nav fixed pl-24 py-12 text-white logo text-3xl font-light'}>
        <h1>Beer Parlor</h1>
    </nav>
  )
}
