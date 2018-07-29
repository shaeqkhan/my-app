import React, { Component } from 'react';
import { render } from 'react-dom';

import ListFriends from './ListFriends'
import AddFriend from './AddFriend'
import Clock from './Clock'

class HelloUser extends React.Component {

    constructor(props) {
    
        super(props);
        
        this.state = { 
            name: 'Shaeq Khan',
            friends: ['Omar Khan', 'Sohaib Khan', 'Ibrahim Khan'] 
        }

        this.addFriends = this.addFriends.bind(this)

    }


    addFriends(friend) {
        this.setState({
        friends: this.state.friends.concat([friend])
        });
    }

    render() {
        return (
        <div>
            Hello, {this.state.name} <br /><br />
            <AddFriend addNew={this.addFriends} /> <br /><br />
            <ListFriends friends={this.state.friends} />
            <Clock />
        </div>
        );
    }
}

export default HelloUser;