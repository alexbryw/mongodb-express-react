import React from React;

export const EntryContext = React.createContext;

export class EntryProvider extends React.Component {
    render(){
            return (
            <EntryContext.Provider value={}>
                {this.props.children}
            </EntryContext.Provider>
        );
    }
}