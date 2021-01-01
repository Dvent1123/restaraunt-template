import React from 'react'
import { Link } from 'react-scroll'

const Banner = () => {
    return <section className='banner'>
        <div className="banner-inner">
            <header>
                <h1>Restaraunt Name Here</h1>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>
            Perspiciatis, pariatur nobis eligendi assumenda dolor nesciunt ipsa.</p>
            <footer>
                <ul className='banner-list'>
                    <Link
                     to='menu'
                     activeClass='active'
                     spy={true}
                     smooth='true'>
                      Menu
                     </Link>
                </ul>
            </footer>
        </div>
    </section>
}

export default Banner
