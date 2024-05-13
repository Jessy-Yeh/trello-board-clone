import "./App.css";
import List from "./components/List/List";

function App() {
  return (
    <>
      <h1>Trello</h1>
      <h2>Project Management</h2>
      <div className="lists">
        <List title="Project Resources" />
        <List title="To Do" />
      </div>
    </>
  );
}

export default App;
