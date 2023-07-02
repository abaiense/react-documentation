import "./App.css";
import MyButton from "./Components/MyButton/MyButton";
import MyButton02 from "./Components/MyButton/MyButton02";
import Perfil from "./Components/Perfil";
import Profile from "./Components/Profile";

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
      <div className="aulas">
        <h2>Aula 01</h2>
        <div className="cards">
          <Profile />
          <Perfil pessoa={"Antonio Garcia"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
