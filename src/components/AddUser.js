import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
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
          onChange={(e) => this.setState({ firstname: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ lastname: e.target.value })}
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
            this.props.onAdd({
              ...this.state,
            });
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default AddUser;
