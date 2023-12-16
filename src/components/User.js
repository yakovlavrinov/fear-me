import React, { Component } from "react";

class User extends Component {
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <h3>
          {this.user.firstname} {this.user.lastname}
        </h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? "Счастлив" : "Не счастлив"}</b>
      </div>
    );
  }
}

export default User;
