import React, { Component } from 'react';
import Header from './Header';
import Entries from './entry/Entries';
import User from './user/User';
import AddEntry from './AddEntry';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {

        const backgroundColor = {
            minHeight: "100vh",
            margin: 0,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundImage: "linear-gradient(#4a148c, #7c43bd)"
        }
        return (
            <div style={backgroundColor}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Entries
                                entryData={this.props.entryData}
                                refreshEntries={this.props.refreshEntries}
                            />
                        </Route>
                        <Route path="/user">
                            <User/>
                        </Route>
                        <Route path="/addentry">
                            <AddEntry refreshEntries={this.props.refreshEntries}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}