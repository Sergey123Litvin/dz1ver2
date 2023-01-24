import { Component } from "react";
import data from "./data.json";
import { renderCurrentType, renderSearch, treeToMap } from "./utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pathSearch : []
    }
    this.map = treeToMap(data);
    this.input = '';
  }

  inputChange = (e) => {
    this.input = e.target.value;
    console.log()
  }

  search = () => {
    this.state.pathSearch = [];
    this.map.map(i => {
      if(i.includes(this.input) && this.input !== '') {
        this.state.pathSearch.push(i);
        this.setState({...this.state})
      }
    });
    console.log(this.input)
  }

  render() {
    return (
      <>
        <input onChange = {this.inputChange}></input>
        <button onClick = {this.search}>SEARCH</button>

        <ul>
          {
            this.input == '' ? renderCurrentType(data, ["/Common7", "/VC", "/Common7/IDE", "/Common7/Tools", "/VC/bin"]) : renderSearch(data, this.state.pathSearch)
          }
        </ul>
      </>
    )
  }
}

export default App;