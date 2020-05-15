import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

export default class HeaderButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            redirect:false
        }
    }
    handleLogOut = () => {

        fetch(`http://localhost:9000/api/user/logout`, 
        {method:'DELETE',credentials: 'include'})
        .then(
            this.props.refreshUser(),
            this.setState({
                redirect:true
            })
        )
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render(){

        return (
            <>
            {this.renderRedirect()}
                <div>
                    {this.props.userData.admin?      
                        (
                            <Link to="/admin">
                                <IconButton color="primary">
                                <TextFormatIcon />
                                </IconButton>
                            </Link>    
                        )
                        :("")
                    }
                    {
                        (Object.entries(this.props.userData).length !== 0)?
                        (
                            <Link to="/addentry">
                                <IconButton color="primary">
                                    <ControlPointIcon />
                                </IconButton>
                            </Link>
                        ) : ("")
                    }
    
                    {
                        (Object.entries(this.props.userData).length !== 0)?
                        (
                            <IconButton color="primary" onClick={this.handleLogOut}>
                                <ExitToAppIcon />
                            </IconButton>
                        ):(
                            <Link to="/user">
                                <IconButton color="primary">
                                    <AccountCircleIcon />
                                </IconButton>
                            </Link>
                        )
                    }
    
                </div>
            </>
        )
    }
}

