import React from 'react';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Button from '@material-ui/core/Button';

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
        const textfieldStyle = {
            width: "80%",
            marginTop: "1em"
        }
      return (
        <>
            {this.state.loginMode? 
            <UserLogin refreshEntries = {this.props.refreshEntries}/>
            : <UserRegister refreshEntries = {this.props.refreshEntries}/>
            }

            <Button variant="outlined" color="secondary" style={textfieldStyle} onClick={this.enterLoginMode}>
                Test
            </Button>
        </>
      );
    }
}
