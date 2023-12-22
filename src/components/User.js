import React, { Component } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(this.user.id)}
          className="delet-icon"
        />
        <IoHammerSharp
          onClick={() => {
            this.setState({
              editForm: !this.state.editForm,
            });
          }}
          className="edit-icon"
        />
        <h3>
          {this.user.first_name} {this.user.last_name}
        </h3>
        <p>{this.user.email}</p>
        <img src={this.user.avatar} alt="adwa" />
        <b>{this.user.isHappy ? "Счастлив" : "Не счастлив"}</b>
        {this.state.editForm && (
          <AddUser user={this.user} onAdd={this.props.onEdit} />
        )}
      </div>
    );
  }
}

export default User;
