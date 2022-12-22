import { Component } from "react";
import Smile from "./components/Smile";
import Result from "./components/Result";


class App extends Component {
  constructor() {
    super();
    this.smile = [
      {
        title: '✌',
        counter: 0,
        idx: 0 
      },
      {
        title: '👌',
        counter: 0,
        idx: 1 
      },
      {
        title: '👍',
        counter: 0,
        idx: 2 
      },
      {
        title: '👏',
        counter: 0,
        idx: 3 
      },
      {
        title: '💪',
        counter: 0,
        idx: 4 
      }
    ]
  }

  render() {
    return (
      <>
        {this.smile.map(i => <Smile {...i} key = {i.idx} smile = {this.smile}/>)}
        <Result arrSmile = {this.smile}/>
      </>
    )
  }
}

export default App;

