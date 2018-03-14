import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        alert("Click handler is working!");
    }
    render() {
        return (
            <button onClick={this.clickHandler} className="btn btn-success">Click Me</button>
        )
    }
}

export default Button;

