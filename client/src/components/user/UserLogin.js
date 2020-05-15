import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom'

export default class UserLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            redirect:false
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
        fetch(`http://localhost:9000/api/user/login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type" : "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .catch(err => {
            if(err.response) { 
                console.log(err)
            }
        })
         .then((response) => {
            if(response.msg){
                this.setState({
                    errorMessage: response.msg
                })
            }
            else{
                this.props.refreshEntries()
                this.props.refreshEntries()
                this.setState({
                redirect:true
                })
            }
            this.props.refreshUser()
        }) 
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render(){
        const textfieldStyle = {
            width: "80%",
            marginTop: "1em"
        }
    
        return (
            <>
             {this.renderRedirect()}
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
                            label="Username"
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
                        <p style = {{color: 'red', fontWeight: 'bold'}}>{this.state.errorMessage}</p>
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
            </>
        );
    }
}
