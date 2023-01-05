import React from 'react';
import CardSliderComponent from './cardSliderComponents/CardSliderComponent';
import StarRating from '../rating/StarRating';


import './slider.css';



const Slider = () => {

    const sliderImages = [
        {
            id: 1,
            img: './images/slider1.png',
            alt: 'slide1',
            title: 'Trip to Thailand',
            description: 'Join the leader in smallship cruising on the Great Lakes',
            price: 250,
            view: 3.28

        },
        {
            id: 2,
            img: './images/slider2.png',
            alt: 'slide2',
            title: 'Trip to India',
            description: 'Join the leader in smallship cruising on the Great Lakes',
            price: 380,
            view: 2.54
        },
        {
            id: 3,
            img: './images/slider3.png',
            alt: 'slide3',
            title: 'Trip to Indonesia',
            description: 'Join the leader in smallship cruising on the Great Lakes',
            price: 140,
            view: 1.23
        },
        {
            id: 4,
            img: './images/slider4.png',
            alt: 'slide4',
            title: 'Trip to Italia',
            description: 'Join the leader in smallship cruising on the Great Lakes',
            price: 450,
            view: 2.2
        }
    ]

    return (
        <section className='card-slider container'>
            <div className="card-slider_text">
                <p className='descr-text'>Recomanded Packages</p>
                <h2 className="secondary-text">Best Value Trips</h2>
                <p className='descr-text'>There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
            </div>
            <div className="card-slider_items">
                {
                    sliderImages.map(slide => (
                        <CardSliderComponent
                            key={slide.id}
                            img={slide.img}
                            alt={slide.alt}
                            title={slide.title}
                            price={slide.price}
                            description={slide.description}
                            view={slide.view}
                            rating=
                            {
                                <StarRating />
                            }
                        />
                    ))
                }
            </div>
        </section>
    )

}

export default Slider;

