import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import pbLogo from '../assets/images/pb-logo.png'

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const navContainerRef = useRef(null)

  useEffect(()=> {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showLinks])

  return  <nav>

      <div className="nav-center" ref={navContainerRef}>
          <div className="nav-header">
            <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
                <FaBars />
            </button>
          </div>

                {/* <img className='logo' src={logo} alt="logo"/> */}
                <div className='links-container' ref={linksContainerRef}>
                  <ul className="links" ref={linksRef}>
                     <Link
                        to='menu'
                        activeClass='active'
                        spy={true}
                        smooth='true'>
                        Menu
                     </Link>
                     <Link
                        to='map'
                        activeClass='active'
                        spy={true}
                        smooth='true'>
                        Located
                     </Link>
                     <Link
                        to='review'
                        activeClass='active'
                        spy={true}
                        smooth='true'>
                        Reviews
                     </Link>
                     <Link
                        to='about'
                        activeClass='active'
                        spy={true}
                        smooth='true'>
                        About
                     </Link>
                </ul>
              </div>
      </div>
              <Link
              to='banner'
              activeClass='active'
              spy={true}
              smooth='true'>
              <div className="logos">
                <div className="pb-logo-container">
                  <img className='pb-logo' src={pbLogo} alt="papa-bears-logo"/>
                </div>
              </div>
              </Link>
  </nav>
}

export default NavBar