import React from 'react';
import '../App.css'

const Header = (props) => {
    return(
        <React.Fragment>
            <h1 className="margin-bottom-none">{props.name}</h1>
            <p className="margin-top-none">{props.title}</p>
        </React.Fragment>
    )
}

export default Header;