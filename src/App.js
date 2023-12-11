import Headers from "./components/Headers";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Headers title="Список пользователей" />
      <main>
        <Users />
      </main>
      <aside></aside>
    </div>
  );
}

export default App;
