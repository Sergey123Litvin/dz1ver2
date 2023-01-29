import { Component } from "react";
import smile from "./arraySmile";

class Result extends Component {
    constructor() {
        super();
        this.state = {
            showResult: false
        }
    }            
    
    showWinner = () => {
        this.setState({...this.state, showResult: !this.state.showResult})
    }

    getWinner = () => {
        let winner = [].concat(smile).sort((a, b) => b.counter - a.counter)
        let div = <div>победитель: {winner[0].title}, голосов: {winner[0].counter}</div>
        if(this.state.showResult){
            return div
        }
    }

    render() {
        return (
        <>
            <button onClick = {this.showWinner}>Show Result</button>
            {this.getWinner()}
        </>
        )
    }
}

export default Result;

