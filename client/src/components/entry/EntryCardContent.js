import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export default function EntryCardContent(props) {

    const image = "http://localhost:9000/" + props.entryData.image;

    let entryImage = {   
        width:'95vw',
    }

    if(useMediaQuery('(min-width:37em)')){
        entryImage = {
            width:'35em', 
        }

    }

    return (
        <>
            <CardContent>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >   
                <Typography align="left" variant="h5" component="h2">
                    {props.entryData.title + " "}
                </Typography>
                <Typography variant="body2" align="left" color="secondary" component="p">
                    By: {props.entryData.username}
                    <IconButton color="secondary" size="small" onClick={props.editModeClick}>
                        <EditIcon />
                    </IconButton>
                </Typography>
            </Grid>
            </CardContent>
            <img style={entryImage} src={image} alt={props.entryData.title + " image"}></img>
            <CardContent>
                <Typography variant="body2" align="left" color="textSecondary" component="p">
                    {props.entryData.text}
                </Typography>
            </CardContent>
        </>
  );
}
