import React , { Component } from "react"

class Accordion extends Component {
    constructor() {
        super();

        this.state = {
            isCollapsed: true
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            isCollapsed: !this.state.isCollapsed,
        })
    }

    render() {
        const { heading, children } = this.props;
        const { isCollapsed } = this.state;
        return (
            <div className="Accordion">
                <h2 onClick={this.onClick} className="heading"> { heading } </h2>
                {
                   !isCollapsed && <div className="content"> { children } </div>
                }
            </div>
        )
    }
}

export default Accordion