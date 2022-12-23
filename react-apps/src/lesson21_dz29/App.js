import { Component } from "react";
import Smile from "./components/Smile";
import Result from "./components/Result";
import smile from "./components/arraySmile";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {smile.map(i => <Smile {...i} key = {i.idx}/>)}
        <Result/>
      </>
    )
  }
}

export default App;

