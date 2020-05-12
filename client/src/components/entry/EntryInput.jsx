import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'; 


export default class EntryInput extends React.Component{
    state = {
        username: 'starstoft',
        title: "",
        selectedFile: null,
        text: "",
        isTitleError: false,
        isImageError: false,
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
        if((this.state.title === "") || (this.state.selectedFile === null)){
            if(this.state.title === ""){
                this.setState({
                    isTitleError: true
                })
            }else{
                this.setState({
                    isTitleError: false
                })
            }
            if(this.state.selectedFile === null){
                this.setState({
                    isImageError: true
                })
            }else{
                this.setState({
                    isImageError: true
                })
            }
        }else{
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
            .catch(error => {
                if(error.response) { 
                    console.log(error.response.data)
                  }
            })
            .then(response => console.log('Success:', JSON.stringify(response))) 
        }

    }

    render(){
        const textfieldStyle = {
            width: "100%",
            marginTop: "1em"
        }

        const formStyle = {
            width:'100%'
        }

        const fileUploadStyle = {
            
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }

        const hide = {
            display: "none"
        }

        return(
            <FormControl style = {formStyle}>
                <TextField 
                    required label="Title" 
                    color="secondary"
                    style={textfieldStyle}
                    error = {this.state.isTitleError}
                    onChange = {this.selectedTitleHandler}
                />
                    <input 
                        required accept="image/png, image/jpeg" 
                        type="file" 
                        id="icon-button-file"
                        style = {hide}
                        onChange = {this.selectedFileHandler}
                    />
                    <label htmlFor="icon-button-file">
                        
                        <IconButton 
                            color="secondary"
                            aria-label="upload picture" 
                            component="span">
                        <PhotoCamera 
                        style = {{fontSize: "4rem"}}/>
                        </IconButton>
                        <p>{this.state.selectedFile? (this.state.selectedFile.name) : ("")}</p>
                    </label>
                <TextField
                    label= "Text, max 140 characters"
                    multiline
                    rows="4"
                    variant="outlined"
                    style={textfieldStyle}
                    color="secondary"
                    inputProps={{
                        maxLength: 140,
                    }}
                    onChange = {this.selectedTextHandler}
                />                           
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick = {this.entryUploadHandler}>
                    submit
                </Button>
            </FormControl>

        )
    }
}