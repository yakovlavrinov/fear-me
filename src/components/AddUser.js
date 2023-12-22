import React, { Component } from "react";

class AddUser extends Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          placeholder="Биография"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              ...this.state,
            };
            if (this.props.user) {
              this.userAdd.id = this.props.user.id;
            }

            this.props.onAdd(this.userAdd);
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default AddUser;
