import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteForever from '@material-ui/icons/HighlightOff';




export default class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin: this.props.userData.admin,
            deleted: false,
            currentUsername: ""
        }
    }

    // Admin deletes User 
    handleDelete = () => {
        fetch(`http://localhost:9000/api/user/${this.props.userData._id}`,{method:'DELETE', credentials: "include"})
        .catch(error => console.error('Error:', error))
        .then(this.setState({deleted: !this.state.deleted})) 
    }

    // Turns a Admin into a User 
    handleAdmin = () => {
        let data = JSON.stringify({admin: !this.state.admin})
        fetch(`http://localhost:9000/api/user/${this.props.userData._id}`,
        {
            method:'PUT',
            headers: {
                Accept: 'application/json',
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: data
        })
        .catch(error => console.error('Error:', error))
        .then(this.setState({admin: !this.state.admin}))
    }
    
    async getCurrentUser(){
        const response = await fetch('http://localhost:9000/api/user/login', {method: 'GET',credentials: 'include'})
        const currentUser = await response.json()
        if(currentUser.username != null){
            this.setState({currentUsername: currentUser.username})
        } else {
            this.setState({currentUsername: ""})
        }

    }

    async componentDidMount(){
        this.getCurrentUser()
    }

    render(){
        const UserCardStyle = {
            padding: "0.5em",
            margin: "0.5em",
        }

        if(this.state.deleted){
            // Hides deleted User
            return(<></>)
        } else {
            return(
                <Card style={UserCardStyle}> 
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                        <div>
                            <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                            >
                                {this.state.admin? 
                                    <TextFormatIcon color="secondary" style={{margin: "0 0.5em"}}/>:
                                    <PersonIcon color="secondary" style={{margin: "0 0.5em"}}/>
                                }
                                <Typography variant="subtitle1" >{ "User: " + this.props.userData.username}</Typography>
                            </Grid>
                        </div>
                        {this.props.userData.username === "admin" || this.state.currentUsername === this.props.userData.username ?
                        <div>
                        </div>
                        :
                        <div>
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary" 
                                onClick={this.handleAdmin}
                            >
                            {this.state.admin? 
                                    "Unadminify"
                                    :"Adminify"
                            }
                            </Button>
                            <IconButton color="secondary" onClick={this.handleDelete}>
                                <DeleteForever/>
                            </IconButton>
                        </div>
                        }
                            
                    </Grid>
                </Card>
            )
        }
    }
}