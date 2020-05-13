import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Redirect} from 'react-router-dom'

export default class EntryInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'starstoft',
            title: "",
            selectedFile: null,
            text: "",
            isTitleError: false,
            titleErrorText: '',
            isImageError: false,
            imageErrorText: '',
            redirect: false
        }
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

    validateInput = () => {
        let isError = false
        const errors = {
            titleErrorText: '',
            isTitleError: false,
            imageErrorText: '',
            isErrorImage: false
        }
        if(this.state.title === ""){
            isError = true
            errors.titleErrorText = 'It needs a title'
            errors.isTitleError = true
        }

        if(this.state.selectedFile === null){
            isError = true
            errors.imageErrorText = 'It needs an image'
            errors.isErrorImage = true
        }
        
        if(isError){
            this.setState({
                ...this.state,
                ...errors,
            })
        }
        return isError
    }

    entryUploadHandler = () => {
        const err = this.validateInput()

        if(!err){
            const fd = new FormData()
            fd.append('username', this.state.username)
            fd.append('title', this.state.title)
            fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
            fd.append('text', this.state.text)
        
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
            
            this.setState({
                redirect:true
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render(){
        const textfieldStyle = {
            width: "100%",
            marginTop: "1em"
        }

        return(
            <>
                {this.renderRedirect()}
                <form style = {{width: '100%'}}>          
                    <TextField
                        variant="outlined"
                        required label="Title, max 30 characters" 
                        color="secondary"
                        style={textfieldStyle}
                        error = {this.state.isTitleError}
                        onChange = {this.selectedTitleHandler}
                        helperText = {this.state.titleErrorText}
                        inputProps = {{maxLength: 30}}
                    />
                    <input 
                        required accept="image/png, image/jpeg" 
                        type="file" 
                        id="icon-button-file"
                        style = {{display: 'none'}}
                        onChange = {this.selectedFileHandler}                      
                    />
                    <label htmlFor="icon-button-file">
                        
                        <IconButton 
                            color="secondary"
                            aria-label="upload picture" 
                            component="span"
                        >
                            <PhotoCamera 
                            style = {{fontSize: "4rem", marginTop: '1rem'}}/>
                        </IconButton>
                        <p style = {{color: 'red'}}>{this.state.isImageError? (""):(this.state.imageErrorText)}</p>
                        <p>{this.state.selectedFile? (this.state.selectedFile.name) : ("")}</p>
                    </label>
                    <TextField
                        label= "Text, max 140 characters"
                        multiline
                        rows="4"
                        variant="outlined"
                        style={textfieldStyle}
                        color="secondary"
                        inputProps = {{maxLength: 140}}
                        onChange = {this.selectedTextHandler}
                    />                           
                    <Button 
                        variant="contained" 
                        color= "secondary"
                        style = {{width: '100%'}}
                        onClick = {this.entryUploadHandler}>
                        submit
                    </Button>
                </form>
            </>
        )
    }
}