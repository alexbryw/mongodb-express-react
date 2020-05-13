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
      refresh: false
    }
  }

  async callAPI(){
    fetch("http://localhost:9000/api/entry/")
    .then((response) => { return response.json()
    }).then((data) => {
      this.setState({apiResponse: data})
    })
  }

  componentDidMount(){
    this.callAPI()
  }

  refreshEntries = () => {
    fetch("http://localhost:9000/api/entry/")
    .then((response) => { return response.json()
    }).then((data) => {
      this.setState({
        apiResponse: data,
      })
    })
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Layout 
            entryData={this.state.apiResponse}
            refreshEntries={this.refreshEntries}
          />
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
