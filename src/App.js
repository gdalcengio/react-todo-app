import "./App.css";

function InputComponent(props) {
  return <input className="text-input" type="text"></input>;
}

function ListItem(props) {
  return (
    <li className="list-item">
      <input className="list-box" type="checkbox"></input>
      <p className="list-description">{props.desc}</p>
    </li>
  );
}

function ListComponent(props) {
  return <ul className="list">{props.list}</ul>;
}

function App() {
  const data = [
    { value: "Clean room", priority: "low" },
    { value: "cook veggies", priority: "medium" },
    { value: "Do dishes", priority: "low" },
    { value: "do homework now", priority: "high" },
  ];
  const list = data.map((element, index) => (
    <ListItem
      key={index}
      prio={element.priority}
      desc={element.value}
    ></ListItem>
  ));

  return (
    <div className="App">
      <h1>To-Do</h1>
      <InputComponent></InputComponent>
      <ListComponent list={list}></ListComponent>
    </div>
  );
}

export default App;
