import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    inCrease() {
        this.setState( {
            count: this.state.count + 1
        } )
    }

    deCrease() {
        this.setState( {
            count: this.state.count - 1
        } )
    }

    render() {
        return (
            <div>
                <button onClick={this.inCrease.bind(this)}>+</button>
                <span>
                    { this.state.count }
                </span>
                <button onClick={this.deCrease.bind(this)}>-</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentDidUpdate() {
        console.log('did update')
    }

    componentWillUnmount() {
        console.log('will unmount')
    }
}

export default Counter