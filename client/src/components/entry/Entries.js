import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EntryCard from './EntryCard';
import WelcomeEntry from './WelcomeEntry';

export default class Enties extends Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: true
        }
    }
    
    render() {
        const entries = this.props.entryData.entries;
        if(typeof entries === "function"){
            return (<div></div>) //nicer loading here
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
                    {this.state.loggedIn ? <WelcomeEntry/> : ""}
                    {entries.map((entry) =>
                        <EntryCard 
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

