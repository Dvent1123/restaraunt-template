import React from 'react'
import outside from '../assets/images/outside-rest-pic.jpg'

const About = () => {
    return (
        <main className='about-main' id='about'>
        <section className='about-container'>
            <div className='about-title-container'>
                <h2 className='about-title'>About</h2>
            </div>
            <div className="about-content">
                <div className="about-text-container">
                    <h3 className="about-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Error quasi laboriosam nemo, nisi similique nam quam asperiores ullam nesciunt repellendus? 
                        Autem ratione nulla eos suscipit, obcaecati sapiente et officiis eaque.
                        <br/>
                        <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Est, commodi qui blanditiis, placeat vel porro dolorem at excepturi 
                        impedit perferendis odit ducimus unde magni libero dolor eum ratione inventore! Labore!
                    </h3>
                </div>
                <img className='about-img' src={outside} alt="restaurant"/>
            </div>

        </section>
        </main>

    )
}

export default About
