import React, { Component } from "react";

class AddUser extends Component {
  render() {
    return (
      <form>
        <input placeholder="Имя" />
        <input placeholder="Фамилия" />
        <textarea placeholder="Биология"></textarea>
        <label htmlFor="isHappy">Счастлив?</label>
        <input type="chackbox" id="isHappy" />
        <button type="button">Добавить</button>
      </form>
    );
  }
}

export default AddUser;
