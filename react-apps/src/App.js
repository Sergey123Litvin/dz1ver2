import { Component } from "react";
import Smiley from "./сomponents/Smiley"
// import aImg from "./img/a.svg"
// import bImg from "./src/img/b.svg"
// import cImg from "./src/img/c.svg"
// import dImg from "./src/img/d.svg"
// import eImg from "./src/img/e.svg"

class App extends Component {
  constructor() {
    super();
    this.state = {
      // img: [aImg]
    }
    this.a = './img/a.svg';
  }

  render() {
    return (
      <img src={require(this.a).default} alt="alt" />
    )
  }
}

export default App;
