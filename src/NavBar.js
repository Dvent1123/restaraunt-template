import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from './rest-logo.jpg'

const NavBar = () => {
  return  <nav>
      <div className="nav-center">
                <img className='logo' src={logo} alt="logo"/>
                <div className='links-container'>
                  <ul className="links">
                      <li>
                          <a href="#">Menu</a>
                      </li>
                        <li>
                          <a href="#">Located</a>
                      </li>
                        <li>
                          <a href="#">Reviews</a>
                      </li>
                        <li>
                          <a href="#">About</a>
                      </li>
                </ul>
              </div>
      </div>
  </nav>
}

export default NavBar