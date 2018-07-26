import React, { Component } from 'react';

class AddFriend extends React.Component {
    
  constructor(props) {
      
    super(props)
    
    this.state = { 
      newFriend: '' 
    }

    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.addAFriend = this.addAFriend.bind(this)
  
  }
  
  
    updateNewFriend(event) {
      this.setState({
        newFriend: event.target.value
      });
    }
  
    addAFriend() {
      this.props.addNew(this.state.newFriend);
      this.setState({
        newFriend: ''
      })
    }
    render() {
      return (
        <div>
          <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
          <button type="button" onClick={this.addAFriend}>Add Friend</button>
        </div>
      )
    }
  };

  export default AddFriend;