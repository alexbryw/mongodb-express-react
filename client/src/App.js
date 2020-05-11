import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout';
import Theme from './MuiTheme'

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
    //this.setState({apiResponse: data.someText})
  }

  componentDidMount(){
    this.callAPI()
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Layout/>
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
