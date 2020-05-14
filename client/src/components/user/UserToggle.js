import React from 'react';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class UserToggle extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            loginMode: true
        }
    }

    enterLoginMode = () => { 
        this.setState({loginMode: !this.state.loginMode})
    }

    render(){
        const buttonStyle = {
            width: "80%",
            marginBottom: "2em"
        }
      return (
        <>
            {this.state.loginMode? 
            <UserLogin/>
            : <UserRegister/>
            }

            <Button variant="contained" color="secondary" style={buttonStyle} onClick={this.enterLoginMode}>
                <ArrowBackIcon fontSize="small"/>
                {this.state.loginMode? 
                "  Register a new User" : "  Log in page"
                }
            </Button>
        </>
      );
    }
}
