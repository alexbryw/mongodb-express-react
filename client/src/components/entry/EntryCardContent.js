import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export default function EntryCardContent(props) {

    let entryImageSize = {   
        width:'95vw',
        height:'95vw',
    }

    let entryWidth = {   
        width:'95vw',
    }

    if(useMediaQuery('(min-width:37em)')){
        entryImageSize = {
            width:'35em', 
            height:'35em'
        }

        entryWidth = {   
            width:'35em',
        }
    }

    const image = "http://localhost:9000/" + props.entryData.image
    return (
        <div>
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
            <CardMedia
            image={image}
            title="Image"
            style={entryImageSize}
            />
            <CardContent>
                <Typography variant="body2" align="left" color="textSecondary" component="p">
                    {props.entryData.text}
                </Typography>
            </CardContent>
        </div>
  );
}
