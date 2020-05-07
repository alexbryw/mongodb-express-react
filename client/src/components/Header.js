import React from 'react';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                <Typography variant="h5" color="primary">MEMEAPP</Typography>
                <IconButton color="primary">
                    <AccountCircleIcon />
                </IconButton>
            </Grid>
        </Container>
    )
}

