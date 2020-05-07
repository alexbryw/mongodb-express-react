import React, { Component } from 'react';
import Header from './Header';
import Entries from './Entries';

export default class Layout extends Component {
    constructor() {
        super()
        this.state ={}
    }
    
    render() {


        const backgroundColor = {
            height: "100%",
            margin: 0,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundImage: "linear-gradient(#201553, #4e1b8a)"
        }

        return (
            <div style={backgroundColor}>
                <Header/>
                <Entries/>
            </div>
        )
    }
}