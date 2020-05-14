import React from 'react';
import EntryCardToggle from './EntryCardToggle';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function EntryCard(props) {

    let entryWidth = {   
        width:'95vw',
    }

    const cardStyle = {
        backgroundColor: '#d1c4e9',
        marginBottom: "1em"
    }

    if(useMediaQuery('(min-width:37em)')){
        entryWidth = {   
            width:'35em',
        }
    }
    console.log(props.entryData)
    return (
        <Grid item>
            <Card style={{...cardStyle, ...entryWidth}}>
                <EntryCardToggle 
                    userData = {props.userData}
                    entryData={ props.entryData }
                    refreshEntries={props.refreshEntries}
                />
            </Card>
        </Grid>
  );
}
