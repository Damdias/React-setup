import React from "react";
import ReactDOM from "react-dom";
import Button from './src/components/Button';

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>Component click handler example</h1>
                <br/>
                <Button/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));

