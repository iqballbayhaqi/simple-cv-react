import React from 'react';
import '../App.css'

const Contact = (props) => {
    return(
        <div className="flex-and-center">
            <div>
                <img src={props.icon} width="20px" alt='icon' />
            </div>
            <p style={{marginLeft: '10px'}}>{props.value}</p>
        </div>
    )
}

export default Contact;