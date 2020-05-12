import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'; 


export default class EntryAlter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            text: "",
            isTitleError: false,
        }
    }

    selectedTitleHandler = event => {
        this.setState({
            title: event.target.value
        })
        console.log(this.state.title)
    }

    selectedTextHandler = event => {
        this.setState({
            text: event.target.value
        })
    }

    //WILL NEED A ONCHANGE FOR USER

    entryUploadHandler = () => {
        if((this.state.title === "")){
            if(this.state.title === ""){
                this.setState({
                    isTitleError: true
                })
            }
        } else{
            let updatedEntry = {
                title: this.state.title,
                text: this.state.text,
                image: this.props.entryData.image
            }
        
            fetch(`http://localhost:9000/api/entry/${this.props.entryData._id}`,{
                method: 'PUT',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(updatedEntry)
            })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response))) 
        }

    }

    render(){
        const textfieldStyle = {
            width: "100%",
            margin: "0.5em 0"
        }

        return(
            <FormControl>
                <TextField 
                    required label="Title" 
                    color="secondary"
                    style={textfieldStyle}
                    error = {this.state.isTitleError}
                    onChange = {this.selectedTitleHandler}
                    defaultValue={this.props.entryData.title}
                    />
                <input 
                    required accept="image/png, image/jpeg" 
                    type="file" 
                    id="icon-button-file"
                    onChange = {this.selectedFileHandler}
                />
                <label htmlFor="icon-button-file">
                    <IconButton 
                        color="secondary"
                        aria-label="upload picture" 
                        component="span">
                    <PhotoCamera />
                    </IconButton>
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
                    defaultValue={this.props.entryData.text}
                    onChange = {this.selectedTextHandler}
                />                           
                <Button 
                    variant="outlined" 
                    color="secondary"
                    style={textfieldStyle}
                    onClick = {this.entryUploadHandler}>
                    Edit
                </Button>
            </FormControl>

        )
    }
}