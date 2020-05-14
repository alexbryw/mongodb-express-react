import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout';
import Theme from './MuiTheme';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apiResponse: [],
      userData: {},
      refresh: false
    }
  }

  async callAPI(){
    fetch("http://localhost:9000/api/entry/")
    .then((response) => { return response.json()})
    .then((data) => {this.setState({apiResponse: data})})
    .catch(error => console.error('Error:', error))
  }

  async callUserAPI(){
      fetch("http://localhost:9000/api/user/login", {method: 'GET',credentials: 'include'})
      .then((response) => { return response.json()})
      .then((data) => {this.setState({userData: data})})
      .catch(error => console.error('Error:', error))
  }

  componentDidMount(){
    this.callAPI()
    this.callUserAPI()
  }

  refreshEntries = () => {
    fetch("http://localhost:9000/api/entry/")
    .then((response) => { return response.json()})
    .then((data) => {this.setState({apiResponse: data})})
    .catch(error => console.error('Error:', error))
  }

  refreshUser = () => {
    setTimeout(function(){ 
    }, 3000);
    fetch("http://localhost:9000/api/user/login", {method: 'GET',credentials: 'include'})
    .then((response) => { return response.json()})
    .then((data) => {this.setState({userData: data})})
    .catch(error => console.error('Error:', error))
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Layout 
            entryData={this.state.apiResponse}
            userData={this.state.userData}
            refreshEntries={this.refreshEntries}
            refreshUser={this.refreshUser}
          />
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
