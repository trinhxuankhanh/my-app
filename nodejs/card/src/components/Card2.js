import React from 'react';

function Card2(props) {
    return (
        <div>
            <img src={props.img} alt='cards'></img>
            {props.children}
        </div>
    )
}

export default Card2;