import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
/* import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'; */


export default class EntryInput extends React.Component{

    render(){
        return(
            <FormControl>
                <TextField required label="Title"/>
                <input required accept="image/png, image/jpeg" type="file" />   
                <TextField
                    label= "Text, max 140 characters"
                    multiline
                    rows="4"
                    variant="outlined"
                    inputProps={{
                        maxLength: 140,
                    }}
                />                           
                <Button variant="contained" color="primary" >
                    submit
                </Button>
            </FormControl>

        )
    }
}