import { Component } from "react";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResult: false
        }
    }            
    
    showWinner = () => {
        this.setState({...this.state, showResult: !this.state.showResult})
    }

    getWinner = () => {
        let sortArr = this.props.arrSmile.sort((a, b) => b.counter - a.counter)
        let div = <div>победитель: {sortArr[0].title}, голосов: {sortArr[0].counter}</div>
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

