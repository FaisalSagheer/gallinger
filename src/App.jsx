import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="min-h-screen bg-stone-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Hero/>
      <About />
      <Books />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
