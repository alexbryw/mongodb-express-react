import React from 'react';
import CardContent from '@material-ui/core/CardContent';
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

    //Deletes entry
    function handleDelete(){
        fetch(`http://localhost:9000/api/entry/${props.entryData._id}`, 
            {method:'DELETE',credentials: 'include'}).then(
                //Yes, this was somehow necessary,
                props.refreshEntries(),
                props.refreshEntries(),
                props.refreshEntries()
            )
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
                <EntryAlter
                    entryData={props.entryData}
                    refreshEntries={props.refreshEntries}
                    style={textfieldStyle}
                    editMode={props.editModeClick}
                />
                <Button 
                    variant="contained" 
                    color="secondary"
                    style={textfieldStyle}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </CardContent>
        </div>
  );
}
