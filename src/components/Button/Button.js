import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES= ['btn--primary', 'btn--outline'];
const SIZES= ['btn--medium', 'btn--large'];


export const Button= ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle
    : STYLES[0];
    //if button style has a class then use the class defined, if no class default to "primary"

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];

    return(
        <Link to= '/all' className='btn'>
            <button className= {`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}
