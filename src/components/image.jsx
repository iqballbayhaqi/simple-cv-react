import React from 'react';

const Image = (props) => {
    return(
        <React.Fragment>
            <img src={props.src} alt={props.alt} width={props.width} />
        </React.Fragment>
    )
}

export default Image;