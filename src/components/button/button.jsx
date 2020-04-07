import React from 'react';
import './button.css';

const Button = (props) => {
    if (props.variant === "black"){
       return (
            <a rel="noopener noreferrer" className="black" href={props.link} target="_blank">
                <button className="variant-black btn" onClick={props.handleClick}>
                    {props.value}
                </button>)
            </a>
        )
    }else if (props.variant === "white"){
        return (
            <a rel="noopener noreferrer" className="white" href={props.link} target="_blank">
                <button className="variant-white btn" onClick={props.handleClick}>
                    {props.value}
                </button>
            </a>
            )
    }
}

export default Button;