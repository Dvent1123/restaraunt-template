import React from 'react'
import { Link } from 'react-scroll'

const Banner = () => {
    return <section className='banner'>
        <div className="banner-inner">
            <header>
                <h1>Papa Bear's</h1>
            </header>
            <p>Fresh food served 7 days a week!<br/>
            Open from 6 AM to 2PM daily</p>
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
