import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButtons';

export default function Header(props) {
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
            <HeaderButton userData={props.userData} refreshUser={props.refreshUser}/>
            </Grid>
        </Container>
    )
}

