import React from 'react'	
import TextField from '@material-ui/core/TextField'	
import Button from '@material-ui/core/Button'	
export default class EntryAlter extends React.Component{	
    constructor(props){	
        super(props)	
        this.state = {	
            title: this.props.entryData.title,	
            text: this.props.entryData.text,
            isTitleError: false,
            titleErrorText: ""
        }	
    }	
    selectedTitleHandler = event => {	
        this.setState({	
            title: event.target.value	
        })	
    }	
    selectedTextHandler = event => {	
        this.setState({	
            text: event.target.value	
        })	
    }	
    //WILL NEED A ONCHANGE FOR USER	
    entryUploadHandler = () => {	

        let updatedEntry	

        if((this.state.title === "")){	
/*             this.setState({	
                isTitleError: true	
            }) */
            this.setState({	
                titleErrorText: "Need title"	
            })		
        }
        else {

            updatedEntry = {	
                title: this.state.title,	
                text: this.state.text,	
                image: this.props.entryData.image	
            }
            console.log(this.state.isTitleError)
            if(!this.state.isTitleError){
                fetch(`http://localhost:9000/api/entry/${this.props.entryData._id}`,{	
                    method: 'PUT',	
                    headers: {	
                        "Content-Type" : "application/json"	
                    },
                    credentials: 'include',
                    body: JSON.stringify(updatedEntry)	
                })	
                .then(response => response.json())	
                .catch(error => console.error('Error:', error))	
                .then(response => console.log('Success:', JSON.stringify(response)))
                .then(
                    this.props.refreshEntries(),
                    this.props.refreshEntries(),
                    this.props.editMode()
                )	
    
            }
        }
        
    }	
    render(){	
        const entryAlterStyle = {	
            width: "80%",	
            margin: "0.5em 0"	
        }	
        const image = "http://localhost:9000/" + this.props.entryData.image;	
        let entryImage = {   	
            maxWidth:'80%',	
            minWidth: '80%'	
        }	
        return(	
            <div>	
                <TextField 	
                    required label="Title" 	
                    color="secondary"	
                    style={entryAlterStyle}	
                    onChange = {this.selectedTitleHandler}	
                    defaultValue={this.props.entryData.title}	
                    variant="outlined" 	
                    fullWidth
                    inputProps = {{maxLength: 20}}
                    error = {this.state.titleErrorText? true:false}
                    helperText = {this.state.titleErrorText}                  
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
                    fullWidth	
                />                           	
                <Button 	
                    variant="outlined" 	
                    color="secondary"	
                    style={entryAlterStyle}	
                    fullWidth	
                    onClick = {this.entryUploadHandler}>	
                    Edit	
                </Button>	
            </div>	
        )	
    }	
}