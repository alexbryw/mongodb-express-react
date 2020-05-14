import React from 'react'
import {Redirect} from 'react-router-dom'
import UserCard from './UserCard'

export default class UserList extends React.Component{
    constructor(){
        super()
        this.state = {
            redirect: false,
            apiResponse: []
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    

    async callAPI(){
        fetch("http://localhost:9000/api/user", {method: 'GET',credentials: 'include'})
        .then((response) => { return response.json()})
        .then((data) => {this.setState({apiResponse: data})})
        .catch(error => console.error('Error:', error))
    }
    
    componentDidMount(){
        this.callAPI()
    }

    render(){
        const users = this.state.apiResponse;
        if(this.state.apiResponse === undefined){
            return <div></div>
        } else {
            return(
                <>
                    {this.renderRedirect()}
                    {users.map((userData) =>
                            <UserCard 
                                key={userData._id} 
                                userData={userData}
                            />
                        )}
                </>
            )
        }
    }
}