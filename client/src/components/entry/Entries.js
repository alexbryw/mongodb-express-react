import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EntryCard from './EntryCard';
import WelcomeEntry from './WelcomeEntry';

export default class Entries extends Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: true
        }
    }
    
    render() {
        const entries = this.props.entryData.entries;
        if(typeof entries === "function"){
            // Loading div, might need something nicer
            return (<div></div>)
        } else {
            entries.reverse()
            return (
                <div>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"
                    >
                    {this.props.userData.username? <WelcomeEntry userData={this.props.userData}/> : ""}
                    {entries.map((entry) =>
                        <EntryCard 
                            userData={this.props.userData}
                            entryData={ entry } 
                            key={entry._id} 
                            refreshEntries={this.props.refreshEntries}
                        />
                    )}
                    
                    </Grid>
                </div>
            )
        }
    }
}

