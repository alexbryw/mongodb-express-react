import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export default function EntryCard(props) {

    let entrySize = {   
        width:'95vw',
        height:'95vw',
    }
    const cardStyle = {
        backgroundColor: '#d1c4e9'
    }

    if(useMediaQuery('(min-width:37em)')){
        entrySize = {
            width:'35em', 
            height:'35em'
        }
    }

  return (
    <Grid item>
        <Card style={cardStyle}>
            <CardContent>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{padding:"0 1em 0 1em"}}
            >   
                <Typography align="left" variant="h5" component="h2">
                    {props.entryData.title}
                </Typography>
                <Typography variant="body2" align="left" color="textPrimary" component="p">
                    By: {props.entryData.username}
                </Typography>
            </Grid>
            </CardContent>
            <CardMedia
            image={props.entryData.image}
            title="Contemplative Reptile"
            style={entrySize}
            />
            <CardContent>
                <Typography variant="body2" align="left" color="textSecondary" component="p">
                    {props.entryData.text}
                </Typography>
                <IconButton color="secondary">
                    <EditIcon />
                </IconButton>
            </CardContent>
        </Card>
    </Grid>
  );
}
