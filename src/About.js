import React from 'react'
import outside from './petr-sevcovic-fyQr1T3GE34-unsplash.jpg'

const About = () => {
    return (
        <section className='about-container' id='about'>
            <div className='about-title-container'>
                <h2 className='about-title'>About</h2>
            </div>
            <div className="about-content">
                <h3 className="about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Error quasi laboriosam nemo, nisi similique nam quam asperiores ullam nesciunt repellendus? 
                    Autem ratione nulla eos suscipit, obcaecati sapiente et officiis eaque.
                    <br/>
                    <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Est, commodi qui blanditiis, placeat vel porro dolorem at excepturi 
                    impedit perferendis odit ducimus unde magni libero dolor eum ratione inventore! Labore!
                </h3>
                <img className='about-img' src={outside} alt="restaurant-photo"/>
            </div>

        </section>
    )
}

export default About
