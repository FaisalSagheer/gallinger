import About from '@/components/About'
import Books from '@/components/Books'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Books/>
    </div>
  )
}

export default page
