import "./Condicional.css";

const Condicional = (props) => {

  let content //variavel declarada para receber o conteudo como retorno da condicional

  //Componente Interno declarado como função
  function LoginArea(props) {
    return (
      <div className="condicional">
        <h2 className="title"> {props.status} </h2>
      </div>
    );
  }

  //Criando a Validação para o retorno da informcao (Passando o prop para o componente interno)
  if (props.isLoggedIn) {
    content = <LoginArea status="Você já está Logado"/>
  } else {
    content = <LoginArea status="Precisa Logar"/>
  }

  return <div>{content}</div>; //retorno 
};

export default Condicional;
