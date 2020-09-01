import React, { Component } from 'react'
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class Zing extends Component {
    render() {
        const { title, description, viewCount } = this.props;
        return(
            <div>
                <div>
                    <div>
                        <p>{title}</p>
                        <p>{description}</p>
                        <p>{viewCount}</p>
                    </div>
                    <Button color="primary">primary</Button>{' '}
                    <Button color="secondary">secondary</Button>{' '}
                    <Button color="success">success</Button>{' '}
                    <Button color="info">info</Button>{' '}
                    <Button color="warning">warning</Button>{' '}
                    <Button color="danger">danger</Button>{' '}
                    <Button color="link">link</Button>
                </div>
            </div>
        );
    }

}

Zing.defaultProps = {
    viewCount: 0
}

Zing.propTypes = {
    /** Name the song */
    title: PropTypes.string.isRequired,
    /** Description the song */
    description: PropTypes.string.isRequired,
    /** Count total view in the song on week */
    viewCount: PropTypes.number.isRequired,
}

export default Zing;