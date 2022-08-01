import React from 'react'
import { BottomNav } from '../Nav/BottomNav'
import { TopNav } from '../Nav/TopNav'

import { Header } from '../Sections/Header'
import { Body } from '../Sections/Body'
import { Footer } from '../Sections/Footer'

export const LandingPage = () => {
  return (
    <div>
        <TopNav />
      <BottomNav />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
