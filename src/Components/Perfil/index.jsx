const Perfil = (props) => {
  const usuario = {
    idade: 30,
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    cargo: "Dev",
  };

  return (
    <div>
      <img src={usuario.imageUrl} alt="" srcset="" />
      <div>Meu nome é: {props.pessoa}</div>
      <div>tenho {usuario.idade} e trabalho como {usuario.cargo}...</div>
    </div>
  );
};

export default Perfil;
