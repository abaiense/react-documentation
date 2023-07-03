import "./App.css";
import Aulas from "./Components/Aulas";
import Condicional from "./Components/Condicional";
import Map from "./Components/Map";
import MyButton from "./Components/MyButton/MyButton";
import MyButton02 from "./Components/MyButton/MyButton02";
import Perfil from "./Components/Perfil";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Aulas tituloAula={"Aula - 01"}> 
          <MyButton />
          <MyButton02 />
      </Aulas>

      <Aulas tituloAula={"Aula - 02"}>
        <Profile />
        <Perfil pessoa={"Antonio Garcia"} />
      </Aulas>

      <Aulas tituloAula={"Aula - 03"}>
        <Condicional isLoggedIn={true} />
      </Aulas>

      <Aulas tituloAula={"Aula - 04 - Map"}>
        <Map />
      </Aulas>

    </div>
  );
}

export default App;
