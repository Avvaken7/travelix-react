import React from 'react';
import Card from '../card/Card';

import './ourServices.css';

const OurServices = () => {

    const cards = [
        {
            id: 1,
            img: '../images/book_hotel.svg',
            text: 'Book Hotel',
            descr: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies',
            alt: 'book hotel'
        },
        {
            id: 2,
            img: '../images/book_taxi.svg',
            text: 'Book Taxi',
            descr: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies',
            alt: 'book taxi'
        },
        {
            id: 3,
            img: '../images/book_plane.svg',
            text: 'Book Plane',
            descr: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies',
            alt: 'Book Plane'
        },
        {
            id: 4,
            img: '../images/global_tour.svg',
            text: 'Global Tour',
            descr: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies',
            alt: 'Global Tour'
        }
    ]

    return (
        <section className='ourServices'>
            <div className="services_text">
                <p className='descr-text'>Best Services</p>
                <h2 className="secondary-text">Our Services</h2>
                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
            </div>
            <div className="service_cards">
                {
                    cards.map(card => (
                        <Card
                            key={card.id}
                            img={card.img}
                            text={card.text}
                            descr={card.descr}
                            alt={card.alt}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default OurServices;