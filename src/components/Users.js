import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Bob",
          lastname: "Marley",
          bio: "Here and undefaind dhfbjs jdfsksdkfjn ",
          age: 40,
          isHappy: true,
        },
        {
          id: 2,
          firstname: "John",
          lastname: "Doe",
          bio: "Here and undefaind dhfbjs jdfsksdkfjn ",
          age: 22,
          isHappy: false,
        },
      ],
    };
  }
  render() {
    if (this.state.users.length > 0) {
      return (
        <div>
          {this.state.users.map((el) => (
            <User key={el.id} user={el} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="user">
          <h3>Пользователей нет</h3>
        </div>
      );
    }
  }
}

export default Users;
