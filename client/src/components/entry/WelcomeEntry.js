import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography';

export default function EntryCard(props) {

    let entryWidth = {   
        width:'95vw',
    }

    const cardStyle = {
        backgroundColor: '#fbc02d',
        marginBottom: "1em"
    }

    if(useMediaQuery('(min-width:37em)')){
        entryWidth = {   
            width:'35em',
        }
    }

    return (
        <Grid item>
            <Card style={{...cardStyle, ...entryWidth}}>
                <Typography 
                    variant="caption"
                    component="h2"
                    align="left"
                    style={{margin:"0.6em 0.6em 0.6em 1em", fontSize:'1rem'}}
                    color="secondary"
                >
                    Hello {props.userData.username}!
                </Typography>
            </Card>     
        </Grid>
  );
}
