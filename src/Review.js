import React, {useState} from 'react'
import people from './reviewData'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

export const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    const checkNumber = (number) => {
        if(number > people.length - 1) return 0
        if(number < 0) return people.length - 1
        return number 
    }

    const prevPerson = () =>{
        setIndex((index)=> {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const nextPerson = () => {
        setIndex((index)=> {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    return <main className='review-main'>
        <section className="review-container">
            <div className="review-title">
                <h2>Reviews</h2>
            </div>          
            <article className="review">
                <div className="review-img-container">
                    <img src={image} alt={name} className="review-img"/>
                    <span className='quote-icon'><FaQuoteRight /></span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>  
                <div className="review-btn-container">
                    <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
                    <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
                </div>
            </article>
        </section>
    </main>

}
