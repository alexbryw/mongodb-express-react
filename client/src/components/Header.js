import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import { Link } from 'react-router-dom'

export default function Header() {
    let headerSize = {   
        width:'95vw',
    }
    let headerStyle = {   
        height: '5em'
    }
    if(useMediaQuery('(min-width:37em)')){
        headerSize = {
            width:'35em', 
        }
    }
    return (
        <Container style={headerSize}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={headerStyle}
            >
            <Link to="/">
                <img src={require('../assets/logo.png')} alt="logo" style={{height:"2em", paddingRight:"1em"}}/>
            </Link>
            <div>
            <Link to="/admin">
                    <IconButton color="primary">
                        <TextFormatIcon />
                    </IconButton>
                </Link>
                <Link to="/addentry">
                    <IconButton color="primary">
                        <ControlPointIcon />
                    </IconButton>
                </Link>
                <Link to="/user">
                    <IconButton color="primary">
                        <AccountCircleIcon />
                    </IconButton>
                </Link>
            </div>
            </Grid>
        </Container>
    )
}

