import React from 'react';

import './footer.css';


const Footer = () => {
    return (
        <>
            <footer className="container-fluid">
                <div className="container">
                    <div className="footer_text">
                        <h3 className="footer_text-title">Subscribe to get the latest news about us</h3>
                        <p className="footer_text-description">PlushCare offers insured and non-insured individuals access to affordable, convenient, and<br /> personalized care for urgent and ongoing medical conditions.</p>
                    </div>
                    <div className="footer_subscribe">
                        <form action="submit" className="footer_subscribe-form">
                            <input type="email" placeholder='Enter your email address' />
                            <input type="submit" value="Subscribe Now" />
                        </form>
                    </div>
                    <div className="footer_navigation">
                        <div className="footer_navigation-items">
                            <div className="footer_navigation-item">
                                <h4 className="footer_navigation-title footer_navigation-logo">Travelix Pro</h4>
                                <p className="footer_navigation-description">Your private online marketplace where you can trade goods and services with family, friends, neighbors, classmates, co-workers, and members of the many other communities that comprise your personal world.</p>
                            </div>
                            <div className="footer_navigation-item">
                                <h4 className="footer_navigation-title">Company</h4>
                                <ul>
                                    <li><a href="/" className='footer_navigation-link'>Help Center</a></li>
                                    <li><a href="/" className='footer_navigation-link'>About</a></li>
                                    <li><a href="/" className='footer_navigation-link'>Press</a></li>
                                    <li><a href="/" className='footer_navigation-link'>Blog</a></li>
                                </ul>
                            </div>
                            <div className="footer_navigation-item">
                                <h4 className="footer_navigation-title">Community</h4>
                                <ul>
                                    <li><a href="/" className='footer_navigation-link'>User  Agreement</a></li>
                                    <li><a href="/" className='footer_navigation-link'>Privacy Policy</a></li>
                                    <li><a href="/" className='footer_navigation-link'>Community Guidelines</a></li>
                                    <li><a href="/" className='footer_navigation-link'>Cookie Policy</a></li>
                                    <li><a href="/" className='footer_navigation-link'>My Account</a></li>
                                </ul>
                            </div>
                            <div className="footer_navigation-item">
                                <h4 className="footer_navigation-title">Contact us</h4>
                                <ul>
                                    <li className='footer_navigation-contacts'>
                                        <a href="mailto:contact@example.com" className='footer_navigation-adress'>contact@example.com</a></li>
                                    <li className='footer_navigation-contacts'>
                                        <a href="tel:+152 534-468-854" className='footer_navigation-adress'>+152 534-468-854</a></li>
                                    <li className='footer_navigation-contacts'>
                                        <a href="/" className='footer_navigation-adress'>View on Google map</a></li>
                                </ul>
                                <div className="footer_navigation-social">
                                    <a href="/"><img src="./images/facebook.png" alt="/" /></a>
                                    <a href="/"><img src="./images/linkedin.png" alt="/" /></a>
                                    <a href="/"><img src="./images/twitter.png" alt="/" /></a>
                                    <a href="/"><img src="./images/pinterest.png" alt="/" /></a>
                                    <a href="/"><img src="./images/instagram.png" alt="/" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_copyright">
                        <hr />
                        <p className='footer_copyright-text'>Copyright 2021, All Rights Reserved By Travelix Pro </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;