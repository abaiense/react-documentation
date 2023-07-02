import "./MyButton.css"

const MyButton = ({children}) => {

  function MyButton() {
    return <button>I'm a button</button>;
  }

  return (
    <div className="MyButton">
      {children}
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
};

export default MyButton;
