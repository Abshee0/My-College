import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Admissions from './components/Admissions'
import NewsNEvents from './components/NewsNEvents'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgramPage from './pages/ProgramPage'
import Applications from './pages/Applications'

function App() {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Programs />
            <Admissions />
            <NewsNEvents />
            <Contact />
            
          </>
        } />
        <Route path="/program/:id" element={<ProgramPage />} />
        <Route path="/application" element={<Applications />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;