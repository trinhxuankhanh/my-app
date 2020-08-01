import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import check from '../img/tick.svg';
import checkDone from '../img/tick-done.svg'

class TodoItems extends Component {
    render() {
        const { item, clickItem } = this.props;
        let checkImg = item.isComplete ? checkDone : check
        return (
            <div className={classNames('TodoItems', {
                'TodoItems-done': item.isComplete
                })}>
                <img onClick={clickItem} src={checkImg} className='TodoItems-img'></img>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItems