import "./App.css";
import Condicional from "./Components/Condicional";
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
      <hr />
      <div className="aulas">
        <h2>Aula 02</h2>
        <div className="cards">
          <Profile />
          <Perfil pessoa={"Antonio Garcia"}/>
        </div>
      </div>
      <hr />
      <div className="aulas">
        <h2>Aula 03</h2>
        <p>Condicionao</p>
        <div className="cards">
          <Condicional isLoggedIn={true}/>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
