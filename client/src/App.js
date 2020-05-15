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
    }
  }

  // Gets all entries when mounted
  async callAPI(){
    fetch("http://localhost:9000/api/entry/")
    .then((response) => { return response.json()})
    .then((data) => {this.setState({apiResponse: data})})
    .catch(error => console.error('Error:', error))
  }

  // Gets the user (if any) when mounted
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


  // function used via props to refresh entries
  // like when a entry deleted or edited
  refreshEntries = () => {
    fetch("http://localhost:9000/api/entry/")
    .then((response) => { return response.json()})
    .then((data) => {this.setState({apiResponse: data})})
    .catch(error => console.error('Error:', error))
  }

  // function used via props to refresh user
  // like when a user log out or log in
  refreshUser = () => {
    this.setState({userData: {}})
    fetch("http://localhost:9000/api/user/login", {method: 'GET',credentials: 'include'})
    .then((response) => { return response.json()})
    .then((data) => {
      if(data.msg){
        this.setState({userData: {}})
      } else {
        this.setState({userData: data})
      }
    })
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
