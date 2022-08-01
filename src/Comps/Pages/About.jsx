import React from 'react'
import { BottomNav } from '../Nav/BottomNav';
import { TopNav } from '../Nav/TopNav';
import { Footer } from '../Sections/Footer';

export const About = () => {
  return (
    <div>
        <TopNav />
        <BottomNav />
        <div className='my-90'>
            <p>gee</p>
            <p>gee</p>
            <p>gee</p>
            <p>gee</p>
        </div>
        <Footer />
    </div>
  )
}

export default About;