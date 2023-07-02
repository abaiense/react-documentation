import "./MyButton.css"

function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyButton02() {
  return (
    <div className="MyButton">
      <h4>mybutton02</h4>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
