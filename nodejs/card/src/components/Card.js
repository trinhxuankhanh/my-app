import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { img, children } = this.props;
        return(
            <div>
                <img src={img} alt='card'></img>
                { children }
            </div>
        )
    }
}

export default Card