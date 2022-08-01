import React from 'react'
import { BottomNav } from '../Nav/BottomNav'
import { TopNav } from '../Nav/TopNav'
import { Body } from '../Sections/Body'
import { Footer } from '../Sections/Footer'

export const Store = () => {
  return (
    <div>
        <TopNav />
        <BottomNav />
        <Body />
        <Footer />
    </div>
  )
}

export default Store;
