import React from 'react';

import './cardSliderComponent.css';

const CardSliderComponent = ({ img, alt, title, price, description, rating, view }) => {

    return (
        <div className="slider_card">
            <a href="/"><img src={img} alt={alt} className="slider_card-image" /></a>
            <div className="slider_card-head">
                <h3 className="slider_card-title">{title}</h3>
                <span className="slider_card-price">{price}$</span>
            </div>
            <p className="slider_card-description descr-text">{description}</p>
            <div className="slider_card-rating">
                {rating}
                <span className="slider_card-view">{view}k Review</span>
            </div>
            <a href="/" className="nav-link">View Details</a>
        </div>

    )
}

export default CardSliderComponent;


