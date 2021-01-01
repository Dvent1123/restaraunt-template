import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FullMenu from './components/Menu/FullMenu'
import {Review} from './components/Review'
import MapContainer from './components/Map/MapContainer'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <NavBar /> 
      <Banner />
      <FullMenu />
      <Review />
      <MapContainer />
      <About />
      <Footer />
    </>
  )
}

export default App
