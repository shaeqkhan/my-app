import React, { Component } from 'react';

class ListFriends extends React.Component {

    render() {
      var allFriends = this.props.friends.map(function (friend) {
        return <li>{friend}</li>;
      });
  
      return (
        <div>
          Friends:
              <ul>{allFriends}</ul>
        </div>
      );
    }
  };

  export default ListFriends;