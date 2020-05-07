import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EntryCard from './EntryCard';
import entryArray from '../testArray/entryArray';


export default class Enties extends Component {
    constructor() {
        super()
        this.state ={}
    }
    
    render() {

        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                >
                {entryArray.map((entry) =>
                    <EntryCard entryData={ entry } key={entry.id}/>
                )}
                
                </Grid>
            </div>
        )
    }
}

