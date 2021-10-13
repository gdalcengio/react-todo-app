import React from "react";
import ListComponent from "./component/ListComponent";
import InputComponent from "./component/InputComponent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    const data = [
      { id: 0, value: "Clean room", priority: "low" },
      { id: 1, value: "Wash the dishes", priority: "medium" },
      { id: 2, value: "Do homework now", priority: "high" },
    ];
    super(props);

    this.state = {
      list: data,
    };
  }

  addItem(value, prio) {
    const item = { id: this.state.list.length, value: value, priority: prio };
    this.setState({
      list: this.state.list.concat([item]),
    });
  }

  removeItem(item) {
    const newList = this.state.list.filter((i) => i.id !== item);
    this.setState({
      list: newList,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <InputComponent
          onAddItem={(value, prio) => this.addItem(value, prio)}
        ></InputComponent>
        <ListComponent
          list={this.state.list}
          onRemoveItem={(item) => this.removeItem(item)}
        ></ListComponent>
      </div>
    );
  }
}

export default App;
