import React from 'react'
import FormControl from '@material-ui/core/FormControl'
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
            }/* else{
                this.setState({
                    isTitleError: false
                })
            } */
            if(this.state.selectedFile === null){
                isError = true
                errors.imageErrorText = 'It needs an image'
                errors.isErrorImage = true
            }/* else{
                this.setState({
                    isImageError: true
                })
            } */
            if(isError){
                this.setState({
                  ...this.state,
                  ...errors,
                })
            }
            return isError
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

        const formStyle = {
            width:'100%',

        }

        const hide = {
            display: "none"
        }

        return(
            <>
            {this.renderRedirect()}
            <form style = {formStyle}>
                
                <TextField
                    variant="outlined"
                    required label="Title" 
                    color="secondary"
                    style={textfieldStyle}
                    error = {this.state.isTitleError}
                    onChange = {this.selectedTitleHandler}
                    helperText = {this.state.titleErrorText}
                    inputProps={{
                        maxLength: 30,
                    }}
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
                    inputProps={{
                        maxLength: 140,
                    }}
                    onChange = {this.selectedTextHandler}
                />                           
                <Button 
                    variant="contained" 
                    color="secondary"
                    style = {{width: '100%'}}
                    onClick = {this.entryUploadHandler}>
                    submit
                </Button>
            </form>
            </>

        )
    }
}