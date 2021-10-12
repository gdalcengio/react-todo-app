import React from "react";
import ListComponent from "./component/ListComponent";
import ListItem from "./component/ListItem";
import InputComponent from "./component/InputComponent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    const data = [
      { value: "Clean room", priority: "low" },
      { value: "cook veggies", priority: "medium" },
      { value: "Do dishes", priority: "low" },
      { value: "do homework now", priority: "high" },
    ];
    super(props);

    this.state = {
      list: data,
    };
  }

  addItem(value, prio) {
    // console.log(`value: ${value}, prio: ${prio}`);
    const item = { value: value, priority: prio };
    this.setState({
      list: this.state.list.concat([item]),
    });
  }

  render() {
    const list = this.state.list.map((element, index) => (
      <ListItem
        key={index}
        prio={element.priority}
        desc={element.value}
      ></ListItem>
    ));
    console.log(this.state.list);

    return (
      <div className="App">
        <h1>To-Do</h1>
        <InputComponent
          onAddItem={(value, prio) => this.addItem(value, prio)}
        ></InputComponent>
        <ListComponent list={list}></ListComponent>
      </div>
    );
  }
}

export default App;
