import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import EntryAlter from './EntryAlter';

export default function EntryEdit(props) {


    const textfieldStyle = {
        width: "80%",
        marginBottom: "1em"
    }

    return (
        <div>
            <CardContent>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >   
                <IconButton color="secondary" size="small" onClick={props.editModeClick}>
                    <ArrowBackIcon />
                </IconButton>
            </Grid>
            <EntryAlter entryData={props.entryData}/>
            <Button variant="contained" color="secondary" style={textfieldStyle}>
                Delete
            </Button>
            </CardContent>
        </div>
  );
}
