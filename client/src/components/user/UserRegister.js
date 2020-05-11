import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function UserRegister() {

    const textfieldStyle = {
        width: "80%",
        marginTop: "1em"
    }

  return (
    <CardContent>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >   
        <Link to="/">
            <IconButton color="secondary" size="small">
                <ArrowBackIcon />
            </IconButton>
        </Link>
        <Typography variant="h5" component="h2">
            Register
        </Typography>
            <div>
                
            </div>
        </Grid>
        <form>
            <TextField
                required
                id="outlined-required"
                label="User"
                defaultValue=""
                variant="outlined"
                fullWidth
                color="secondary"
                style={textfieldStyle}
            />
            <TextField
                required
                id="outlined-required"
                label="Password"
                defaultValue=""
                variant="outlined"
                fullWidth
                color="secondary"
                style={textfieldStyle}
                type="password"
            />
            <Button variant="outlined" color="secondary" style={textfieldStyle}>
                Register
            </Button>
        </form>
    </CardContent>
  );
}
