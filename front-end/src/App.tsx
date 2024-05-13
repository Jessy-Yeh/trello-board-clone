import "./App.css";
import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
