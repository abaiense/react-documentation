import "./Map.css";

const todosOsProdutos = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const Map = () => {
  const listItems = todosOsProdutos.map((produto) => (
    <li key={produto.id} style={{ color: produto.isFruit ? "GreenYellow" : "LightBlue" }}  >
      {produto.title}
    </li>
  ));

  return(
    <ul>{listItems}</ul>
  ) 
};

export default Map;
