import React from 'react';
import StarRating from '../../rating/StarRating';


import './feedbackCards.css';


const FeedbackCards = () => {
    return (
        <>
            <div className="feedback_testimonials">
                <div className="feedback_image">
                    <img src="./images/feedback1.png" className="feedback_image" alt="testimonials" />
                </div>
                <div className="feedback_block">
                    <StarRating />
                    <p className="descr-text">
                        There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies</p>
                    <p className='color-text'>Skylar George</p>
                    <span className="feedback_block-descr">Managing Director, Lovgency</span>
                </div>
            </div>
        </>
    )

}

export default FeedbackCards;