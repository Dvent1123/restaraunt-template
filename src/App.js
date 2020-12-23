import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import FullMenu from './FullMenu'
import {Review} from './Review'
import MapContainer from './MapContainer'
import About from './About'
function App() {
  return (
    <>
      <NavBar /> 
      <Banner />
      <FullMenu />
      <Review />
      <MapContainer />
      <About />
    </>
  )
}

export default App
