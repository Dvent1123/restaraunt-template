import React from 'react'
import { useState } from 'react'


const Closing = () => {
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <section className='closing'>
                <h2 className='closing-header'>Closed Effective July 5, 2021</h2>
            {/* <div className="read-more-wrapper">
                <div className="read-container">
                    <h3 className={isReadMore ?'read-more-text-none' : `read-more-text`}>
                    After 17 years of serving our Lake Havasu City community, we have decided to permanently close our doors on July 5, 2021 at 2 pm. This was not an easy decision for us because we were blessed with tremendous staff and equally amazing customers.

                    <br /><br /> Terry Shader and Tino Ventura opened up Papa Bear’s Restaurant in Lake Havasu City, AZ with nothing but a prayer and a dream. Thank you to all of our customers for making Papa Bear’s Restaurant one of the town’s most popular breakfast establishments. We will dearly miss each and every one of you!

                    <br /><br />We want to give a special THANK YOU to our past and present staff who have been the heart of this establishment, without them we would not have made it!

                    <br /><br />Ultimately, we made this decision because we felt it was time to move onto the next chapter of our lives. We look forward to spending more time with our friends and family.

                    <br /><br />In the meantime, please stop by to enjoy your favorite meal or to simply say hello before our last day!

                    <br /><br />Thank you from the bottom of our hearts and God bless,
                    <br /><br />Family Ventura
                    </h3>
                    {
                        <a className='read-more' onClick={toggleReadMore}>
                            Read More...
                        </a>
                    }
                </div>
            </div> */}
        </section>
    )
}

export default Closing
