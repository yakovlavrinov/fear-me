import { Component } from "react";
import AddUser from "./components/AddUser";
import Headers from "./components/Headers";
import Users from "./components/Users";

class App extends Component {
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
    this.addUser = this.addUser.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Headers title="Список пользователей" />
        <main>
          <Users users={this.state.users} />
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

    console.log(user, id);
  }
}

export default App;
