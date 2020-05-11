import React from 'react';
import EntryCardContent from './EntryCardContent';
import EntryEdit from './EntryEdit';

export default class EntryCardToggle extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            editMode: false,
            apiResponse: ""
        }
    }

    enterEditMode = () => { 
        this.setState({editMode: !this.state.editMode})
    }

    render(){

        console.log(this.props.entryData)

        return (
            <div>
                {this.state.editMode? 
                <EntryEdit entryData={this.props.entryData} editModeClick={this.enterEditMode}/>
                :<EntryCardContent entryData={this.props.entryData} editModeClick={this.enterEditMode}/>
                }              
            </div>

        );
    }
}
