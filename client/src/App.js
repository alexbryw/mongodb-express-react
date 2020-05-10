import React from 'react';
import './App.css';
import EntryInput from './components/EntryInput'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apiResponse: ""
    }
  }

  async callAPI(){
    let response = await fetch("http://localhost:9000")
    let data = await response.json()
    this.setState({apiResponse: data.someText})
  }

  componentDidMount(){
    this.callAPI()
  }

  render(){
    return (
      <div className="App">
        <h2>React Client</h2>
        <h3>From API:  {this.state.apiResponse}</h3>
        <EntryInput/>
      </div>
    );
  }

}

export default App;
