import React from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const About = () => {
  return (
    <div className='relative flex flex-col justify-between items-center px-0'>
        <AboutUs/>
        <ContactUs/>
    </div>
  )
}

export default About