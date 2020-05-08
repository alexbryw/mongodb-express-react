import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

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
            <form>
                <TextField
                        required
                        id="outlined-required"
                        label="Titel"
                        defaultValue={props.entryData.title}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        style={textfieldStyle}
                />
                <TextField
                        required
                        id="outlined-required"
                        label="Temporär BildURL"
                        defaultValue={props.entryData.image}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        style={textfieldStyle}
                />
                <TextField
                        required
                        id="outlined-required"
                        label="Text"
                        defaultValue={props.entryData.text}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        style={textfieldStyle}
                />
                <Button variant="outlined" color="secondary" style={textfieldStyle}>
                    Edit
                </Button>
                <Button variant="contained" color="secondary" style={textfieldStyle}>
                    Delete
                </Button>

                </form>

            </CardContent>
        </div>
  );
}
