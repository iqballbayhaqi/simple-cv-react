import React from 'react';
import './card.css'

const Card = (props) => {
    return(
        <div className={props.center === true ? "container-card margin-center" : "container-card"}>
            <img src={props.image} alt="logo" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card;