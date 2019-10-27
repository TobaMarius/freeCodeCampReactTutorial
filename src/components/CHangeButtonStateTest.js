import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increaseCount = this.increaseCount.bind(this);
    }

    // increaseCount() {
    //     this.setState({ count: this.state.count + 1 });
    // }


    //use prevState if you want to preserve the previous states
    increaseCount() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseCount}>increase count</button>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
