import React from 'react';

import './whyChoose.css';

const WhyChoose = () => {

    return (
        <section className="choose">
            <div className="choose_img">
                <img src="../images/car.svg" alt="car" />
            </div>
            <div className="choose_text">
                <h2 className='secondary-text choose_text-main'>Why Choose Us?</h2>
                <p className="descr-text choose_text-description">
                    There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers
                </p>
                <div className="choose_text-point">
                    <div className="choose_text-point--wrap">
                        <img src="../images/air_car.svg" alt="air car" />
                        <div className="choose_text-point--descr">
                            <h3>Airport Car</h3>
                            <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                    </div>
                    <div className="choose_text-point--wrap">
                        <img src="../images/support.svg" alt="support" />
                        <div className="choose_text-point--descr">
                            <h3>24/7 Support</h3>
                            <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                    </div>
                    <div className="choose_text-point--wrap">
                        <img src="../images/discount.svg" alt="discount" />
                        <div className="choose_text-point--descr">
                            <h3>Special Discount</h3>
                            <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                    </div>
                    <div className="choose_text-point--wrap">
                        <img src="../images/guide.svg" alt="guide" />
                        <div className="choose_text-point--descr">
                            <h3>Tour Guide</h3>
                            <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}


export default WhyChoose;