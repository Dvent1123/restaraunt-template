import React from 'react'
import { Link } from 'react-scroll'

const Banner = () => {
    return <section className='banner'>
        <div className="banner-inner">
            <header>
                <h1>Papa Bear's</h1>
            </header>
            <p>Open: 7 days a week |  6AM to 2PM<br/>
                Phone: 928-855-9390 </p>
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
