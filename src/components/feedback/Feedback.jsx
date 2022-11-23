import React from 'react';
import FeedbackCards from './feedbackCard/FeedbackCards';


import './feedback.css';

const Feedback = () => {
    return (
        <section className='feedback'>
            <div className="feedback_text">
                <p className='descr-text'>Review & Testimonials</p>
                <h2 className="secondary-text">Tourist Feedback</h2>
                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
            </div>
            <div className="container">
                <FeedbackCards/>
            </div>

        </section>
    )

}

export default Feedback;