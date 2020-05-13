import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class UserLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
/*             isusernameError: false,
            titleErrorText: '', */
            password: "",
/*             isPasswordError: false,
            PasswordErrorText: '',
            redirect: false */
        }
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    sendLogInRequest = () => {
        let data = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log('button pressed')
        fetch(`http://localhost:9000/api/user/login`,{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => {
            if(error.response) { 
                console.log(error.response.data)
            }
        })
        .then(response => console.log('Success:', JSON.stringify(response))) 
    }

    render(){
        const textfieldStyle = {
            width: "80%",
            marginTop: "1em"
        }
    
        return (
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >   
                <Link to="/">
                    <IconButton color="secondary" size="small">
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
                <Typography variant="h5" component="h2">
                    Log in
                </Typography>
                    <div>
                        
                    </div>
                </Grid>
                <form>
                    <TextField
                        required
                        label="User"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        style={textfieldStyle}
                        onChange = {this.handleUsername}
                    />
                    <TextField
                        required
                        label="Password"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        style={textfieldStyle}
                        type="password"
                        onChange = {this.handlePassword}
                    />
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        style={textfieldStyle}
                        onClick = {this.sendLogInRequest}
                    >
                        Log in
                    </Button>
                </form>
            </CardContent>
        );
    }
}
