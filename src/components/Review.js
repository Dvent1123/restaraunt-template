import React, {useState, useEffect} from 'react'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import {getReviews} from '../utils/yelp'
import personIcon from '../assets/images/user.svg'
import yelpLogo from '../assets/images/yelp-logo.svg'

export const Review = () => {
    const defaultReviewObjectArray = [
        {
            name: 'default',
            job: 'default',
            date: 'default',
            image: null,
            text: 'default'
        }
    ]
    const [reviews, setReviews] = useState(defaultReviewObjectArray)

    useEffect(() => {
        const getAllReviews = () => {
            getReviews().then(res => {
                setReviews(res)
            })
            .catch(err => console.log(err))
        }
        getAllReviews()
    },[reviews])


    const [index, setIndex] = useState(0)
    const {name, profile_url: job, date , image_url: image, text} = reviews[index]


    const checkNumber = (number) => {
        if(number > reviews.length - 1) return 0
        if(number < 0) return reviews.length - 1
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

    return <main className='review-main' id='review'>
        <section className="review-container">
            <div className="review-title">
                <h2>Reviews</h2>
            </div>          
            <article className="review">
                <div className="review-img-container">
                    {image ?
                        <img src={image} alt={name} className="review-img"/> :
                        <img src={personIcon} alt={name} className="review-img"/>
                    }
                    <span className='quote-icon'><FaQuoteRight /></span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='date'>{date}</p>
                <p className='info'>{text}</p>
                <a className="read-more" href="https://www.yelp.com/biz/papa-bears-restaurant-lake-havasu-city">Read More</a>
                <div className="yelp-img-container">
                    <a href="https://www.yelp.com/biz/papa-bears-restaurant-lake-havasu-city">
                        <img src={yelpLogo} className="yelp-img" alt="yelp-logo"/>
                    </a>
                </div>
                <div className="review-btn-container">
                    <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
                    <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
                </div>
            </article>
        </section>
    </main>

}
