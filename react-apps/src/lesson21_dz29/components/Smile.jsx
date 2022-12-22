import { Component } from "react";
import styles from "./smile.css";

class Smile extends Component {
    constructor(props) {
        super();
    }            

    click = () => {
        this.props.smile[this.props.idx].counter ++
    }

    render() {
        return (
        <>
            <div className="smile" onClick = {this.click}>{this.props.title}</div>
        </>
        )
    }
}

export default Smile;

