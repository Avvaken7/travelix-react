import React from 'react';
import Button from '../../helpers/Button/Button';


import './card.css';

const Card = ({ img, text, descr, alt }) => {
    return (
        <div className="services-cards_item">
            <img src={img} alt={alt} />
            <h3>{text}</h3>
            <p className='descr-text'>{descr}</p>
            {/* <a href="/" className='nav-link'>Explore More</a> */}
            <Button variant={'unFill'} value={"Explore More"}/>
        </div>
    )
}

export default Card;