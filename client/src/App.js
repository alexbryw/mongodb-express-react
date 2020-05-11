import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout';
import Theme from './MuiTheme'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apiResponse: []
    }
  }

  async callAPI(){
    let response = await fetch("http://localhost:9000/api/entry/")
    let data = await response.json()
    this.setState({apiResponse: data})
  }

  componentDidMount(){
    this.callAPI()
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Layout entryData={this.state.apiResponse}/>
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
