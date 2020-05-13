import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteForever from '@material-ui/icons/HighlightOff';
import CardContent from '@material-ui/core/CardContent';




export default class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin: this.props.userData.admin
        }
    }

    handleAdmin = () => {
        this.setState({admin: !this.state.admin})
    }

    render(){
        const UserCardStyle = {
            padding: "0.5em",
            margin: "0.5em",
        }

        
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
                        
                    <div>
                        <Button variant="outlined" size="small" color="secondary" onClick={this.handleAdmin}>
                            Adminify
                        </Button>
                        <IconButton color="secondary">
                            <DeleteForever/>
                        </IconButton>
                    </div>
                </Grid>
            </Card>
        )
    }
}