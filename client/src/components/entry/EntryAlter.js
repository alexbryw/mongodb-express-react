import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'; 


export default class EntryAlter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.entryData.title,
            text: this.props.entryData.text,
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
                        isTitleError: this.props.entryData.title
                    })
                }
            }
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

    render(){
        const entryAlterStyle = {
            width: "100%",
            margin: "0.5em 0"
        }

        const image = "http://localhost:9000/" + this.props.entryData.image;

        let entryImage = {   
            maxWidth:'100%',
        }

        return(
            <FormControl>
                <TextField 
                    required label="Title" 
                    color="secondary"
                    style={entryAlterStyle}
                    onChange = {this.selectedTitleHandler}
                    defaultValue={this.props.entryData.title}
                    variant="outlined" 
                    fullWidth
                    />
                <img style={entryImage} src={image} alt={this.props.entryData.title + " image"}></img>
                <TextField
                    label= "Text, max 140 characters"
                    multiline
                    rows="4"
                    variant="outlined"
                    style={entryAlterStyle}
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
                    style={entryAlterStyle}
                    onClick = {this.entryUploadHandler}>
                    Edit
                </Button>
            </FormControl>

        )
    }
}