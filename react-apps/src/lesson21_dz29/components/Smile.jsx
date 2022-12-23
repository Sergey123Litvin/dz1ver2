import { Component } from "react";
import styles from "./smile.css";
import smile from "./arraySmile";

class Smile extends Component {
    constructor(props) {
        super();
    }            

    handleClick = () => {
        smile[this.props.idx].counter ++
    }

    render() {
        return (
        <>
            <div className="styleItem" onClick = {this.handleClick}>{this.props.title}</div>
        </>
        )
    }
}

export default Smile;

