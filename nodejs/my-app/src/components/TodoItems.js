import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import check from '../img/tick.svg';
import checkDone from '../img/tick-done.svg'
import PropTypes from 'prop-types';

class TodoItems extends Component {
    render() {
        const { item, clickItem } = this.props;
        let checkImg = item.isComplete ? checkDone : check
        return (
            <div className={classNames('TodoItems', {
                'TodoItems-done': item.isComplete
                })}>
                <img onClick={clickItem} src={checkImg} className='TodoItems-img' alt="img check"></img>
                <p>{item.title}</p>
            </div>
        )
    }
}

TodoItems.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        isComplete: PropTypes.bool,
    }),
    clickItem: PropTypes.func,
}

export default TodoItems