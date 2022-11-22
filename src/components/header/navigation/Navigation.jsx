import React from 'react';

import './navigation.css'

const Navigation = () => {

    const listItems = [
        'Tour’s',
        'Services',
        'Packege',
        'About Us',
        'Sign In',
        'Sign Up'
    ]

    return (
        <header className='container'>
            <div className="navigation">
                <a href="#" className="navigation_logo">Travelix <span>Pro</span></a>
                <nav className="nav">
                    <ul className='nav_list'>
                        {
                            listItems.map((item, index) => {
                                if (listItems.length - 1 === index) {
                                    return <li className='nav_item' key={index}>
                                        <a href="#" className='nav_link-btn' >{item}</a>
                                    </li>
                                } else {
                                    return <li className='nav_item' key={index}>
                                        <a href="#" className='nav_link'>{item}</a>
                                    </li>
                                }

                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;