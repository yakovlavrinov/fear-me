import { Component } from "react";
import AddUser from "./components/AddUser";
import Headers from "./components/Headers";
import Users from "./components/Users";
import axios from "axios";
const baseUrl = "https://reqres.in/api/users?page=2";

class App extends Component {
  constructor(props) {
    axios.get(baseUrl).then((res) => {
      this.setState({ users: res.data.data });
    });

    super(props);
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Headers title="Список пользователей" />
        <main>
          <Users
            users={this.state.users}
            onEdit={this.editUser}
            onDelete={this.deleteUser}
          />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }
  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;

    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
  }
}

export default App;
