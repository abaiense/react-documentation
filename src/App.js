import "./App.css";
import MyButton from "./Components/MyButton/MyButton";
import MyButton02 from "./Components/MyButton/MyButton02";

function App() {
  return (
    <div className="App">
      <div className="aulas">
        <h2>Aula 01</h2>
        <div className="cards">
          <MyButton />
          <MyButton02 />
        </div>
      </div>
    </div>
  );
}

export default App;
