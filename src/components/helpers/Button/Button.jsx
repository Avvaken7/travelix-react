import React from 'react';

import './button.css';

const Button = props => {

    const { clickHandler, variant, value } = props;

    const linkVariant = variant === 'fill' ? "btnLinkFill" : "btnLinkUnFill";
    return (
        <a
            className={`${linkVariant}`}
            onClick={clickHandler}
            variant={variant}
        >
            {value}
        </a>
    );
};

export default Button;