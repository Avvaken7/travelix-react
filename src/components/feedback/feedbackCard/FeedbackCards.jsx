import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import StarRating from '../../rating/StarRating';


import './feedbackCards.css';


const feedbackCards = [
    {
        img: '../images/feedback1.png',
        text: 'Skylar George',
        descr: 'There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies',
        alt: 'testimonials1',
        job: 'Art Director'
    },
    {
        img: '../images/feedback_2.png',
        text: 'Sofia Gemph',
        descr: 'There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies',
        alt: 'testimonials2',
        job: 'Manager'
    },
    {
        img: '../images/feedback_3.png',
        text: 'Ann Tristar',
        descr: 'There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies',
        alt: 'testimonial3',
        job: 'CFO'
    },
    {
        img: '../images/feedback_4.png',
        text: 'Helen Bonem',
        descr: 'There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies',
        alt: 'testimonial4',
        job: 'CTO'
    },
    {
        img: '../images/feedback_5.png',
        text: 'Filicia Mitch',
        descr: 'There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies',
        alt: 'testimonials5',
        job: 'Corporate Director'
    }
]

const FeedbackCards = () => {
    return (
        <>
            <Carousel
                renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                    <button onClick={previousSlide}>
                        <i className="arrow_prev"></i>
                    </button>
                )}
                renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                    <button onClick={nextSlide}>
                        <i className="arrow_next"></i>
                    </button>
                )}
            >
                {
                    feedbackCards.map((item, index) => (
                        <div key={index}>
                            <div className="feedback_testimonials">
                                <div className="feedback_image">
                                    <img src={item.img} className="feedback_image" alt={item.alt} />
                                </div>
                                <div className="feedback_block">
                                    <StarRating />
                                    <p className="descr-text">{item.descr}</p>
                                    <p className='color-text'>{item.text}</p>
                                    <span className="feedback_block-descr">{item.job}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </>
    )

}

export default FeedbackCards;