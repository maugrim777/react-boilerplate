import React from 'react';
import {Link} from 'react-router-dom';
import UserService from "../../services/UserService/UserService"

class Home extends React.Component{
    constructor() {
        super()
        this.state = {
            users: []
        }

        this.UserService = new UserService()
    }

    componentDidMount() {
        this.UserService.getAllUsers()
            .then(response => {
                this.setState({users: response})
            })
    }

    renderUsers = () => {
        return this.state.users.map((user,key) => {
            return(
                <li key={key}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            )
        })}

    render() {
        return(
            <div>
                <ul>{this.renderUsers()}</ul>
            </div>
        ) 
    }
    
}

export default Home;