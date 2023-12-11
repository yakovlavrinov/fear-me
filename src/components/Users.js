import React, { Component } from "react";

class Users extends Component {
  users = [
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
  ];
  render() {
    if (this.users.length > 0) {
      return (
        <div>
          {this.users.map((el) => (
            <div key={el.id} className="user">
              <h3>
                {el.firstname} {el.lastname}
              </h3>
              <p>{el.bio}</p>
              <b>{el.isHappy ? "Счастлив" : "Не счастлив"}</b>
            </div>
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
