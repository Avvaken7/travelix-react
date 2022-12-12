import React from 'react';
import StarRating from "../rating/StarRating";

import './booking.css';


const Booking = () => {
    return (
        <section className='booking-section container'>
            <div className="booking">
                <div className="booking_text">
                    <p className="another-text">Easy and Fast</p>
                    <h2 className="secondary-text">Book Next Trip in 3 Easy Steps</h2>
                    <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
                    <div className="booking_text-items">
                        <div className="choose_text-point--wrap">
                            <div className="choose_text-point--img">
                                <img src="../images/geo.png" alt="destination" />
                            </div>
                            <div className="choose_text-point--descr">
                                <h3>Choose Destionation</h3>
                                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value.</p>
                            </div>
                        </div>
                        <div className="choose_text-point--wrap">
                            <div className="choose_text-point--img">
                                <img src="../images/payments.png" alt="payments" />
                            </div>
                            <div className="choose_text-point--descr">
                                <h3>Make Payment</h3>
                                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value.</p>
                            </div>
                        </div>
                        <div className="choose_text-point--wrap">
                            <div className="choose_text-point--img">
                                <img src="../images/date.png" alt="date" />
                            </div>
                            <div className="choose_text-point--descr">
                                <h3>Reach Airport on Selected Date</h3>
                                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking_img">
                    <div className="booking_img-users">
                        <div className="booking_img-user">
                            <div className="booking_img-user--avatar">
                                <img src="./images/lubin.png" alt="Dr.Maren Lubin" />
                            </div>
                            <div className="booking_img-user--descr">
                                <img src="./images/check.svg" alt="checked" />
                                <h3 className="booking_img-title">Dr.Maren Lubin</h3>
                                <p className="booking_img-description">Thailand to Peris</p>
                                <StarRating />
                            </div>
                        </div>
                        <div className="booking_img-user">
                            <div className="booking_img-user--avatar">
                                <img src="./images/leo.png" alt="Leo Carder" />
                            </div>
                            <div className="booking_img-user--descr">
                                <img src="./images/check.svg" alt="checked" />
                                <h3 className="booking_img-title">Leo Carder</h3>
                                <p className="booking_img-description">Cox’s Bazar to Peris</p>
                                <StarRating />
                            </div>
                        </div>
                    </div>
                    <img src="./images/plane.svg" alt="plane" className='booking_img-plane'/>
                    <div className="booking_img-card">
                        <div className="booking_img-head">
                            <h3 className="booking_img-title">Trip To Tailand</h3>
                            <span className="booking_img-price">250$</span>
                        </div>
                        <p className="booking_img-description">Join the leader in smallship cruising on the Great Lakes</p>
                        <div className="booking_img-rating">
                            <StarRating />
                            <span className="booking_img-view">3.25k Review</span>
                        </div>
                        <a href="/" className="booking_img-link">Explore more &#8594;</a>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Booking;