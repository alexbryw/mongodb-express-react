import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EntryCard from './EntryCard';

export default class Enties extends Component {
    constructor(props) {
        super(props)
        this.state ={}
    }
    
    render() {
        const entries = this.props.entryData.entries
        if(typeof entries === "function"){
            return (<div></div>) //nicer loading here
        } else {
            return (
                <div>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"
                    >
                    {entries.map((entry) =>
                        <EntryCard entryData={ entry } key={entry._id}/>
                    )}
                    
                    </Grid>
                </div>
            )
        }
    }
}

