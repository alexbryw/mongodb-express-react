import React, { Component } from 'react';
import Header from './Header';
import Entries from './entry/Entries';
import User from './user/User';
import AddEntry from './AddEntry';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from './admin/AdminPage';

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
                    <Header 
                        userData={this.props.userData}
                        refreshUser={this.props.refreshUser}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Entries
                                userData={this.props.userData}
                                entryData={this.props.entryData}
                                refreshEntries={this.props.refreshEntries}
                            />
                        </Route>
                        <Route path="/admin">
                            <AdminPage />
                        </Route>
                        <Route path="/user">
                            <User refreshEntries={this.props.refreshEntries} refreshUser={this.props.refreshUser}/>
                        </Route>
                        <Route path="/addentry">
                            <AddEntry 
                                refreshEntries={this.props.refreshEntries}
                                userData={this.props.userData}
                                />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}