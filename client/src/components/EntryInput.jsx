import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'; 


export default class EntryInput extends React.Component{
    state = {
        username: 'starstoft',
        title: null,
        selectedFile: null,
        text: null
    }

    selectedTitleHandler = event => {
        this.setState({
            title: event.target.value
        })
    }

    selectedFileHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    selectedTextHandler = event => {
        this.setState({
            text: event.target.value
        })
    }

    entryUploadHandler = () => {
        //event.preventDefault()
        const fd = new FormData()
        fd.append('username', this.state.username)
        fd.append('title', this.state.title)
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        fd.append('text', this.state.text)

        console.log(...fd)
        fetch(`http://localhost:9000/api/entry/`,{
            method: 'POST',
            body: fd
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response))) 
    }

    render(){
        return(
            <FormControl>
                <TextField required label="Title" onChange = {this.selectedTitleHandler}/>
                <input required accept="image/png, image/jpeg" type="file" id="icon-button-file" onChange = {this.selectedFileHandler}/>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
                <TextField
                    label= "Text, max 140 characters"
                    multiline
                    rows="4"
                    variant="outlined"
                    inputProps={{
                        maxLength: 140,
                    }}
                    onChange = {this.selectedTextHandler}
                />                           
                <Button type= "submit" variant="contained" color="primary" onClick = {this.entryUploadHandler}>
                    submit
                </Button>
            </FormControl>

        )
    }
}