import React, { Component } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends Component {
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delet-icon" />
        <IoHammerSharp className="edit-icon" />
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
