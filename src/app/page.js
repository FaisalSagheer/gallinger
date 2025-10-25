import About from '@/components/About'
import AuthorsGallery from '@/components/AuthorsGallery'
import Books from '@/components/Books'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Books/>
      <AuthorsGallery/>
      <Contact/>
    </div>
  )
}

export default page
