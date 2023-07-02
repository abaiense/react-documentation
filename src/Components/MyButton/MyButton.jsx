import "./MyButton.css"

const MyButton = () => {

  function MyButton() {
    return <button>I'm a button</button>;
  }

  return (
    <div className="MyButton">
      <h4>mybutton</h4>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
};

export default MyButton;
