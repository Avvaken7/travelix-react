import React from 'react';
import FeedbackCards from './feedbackCard/FeedbackCards';


import './feedback.css';

const Feedback = () => {
    return (
        <section className='container-fluid feedback'>
            <div className="feedback_text">
                <p className='descr-text'>Review & Testimonials</p>
                <h2 className="secondary-text">Tourist Feedback</h2>
                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, <br /> this was accompanied by a high level of concern that many consumers</p>
            </div>
            <FeedbackCards />
        </section>
    )

}

export default Feedback;