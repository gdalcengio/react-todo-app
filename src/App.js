import React from "react";
import ListComponent from "./component/ListComponent";
import InputComponent from "./component/InputComponent";
import LogComponent from "./component/LogComponent";

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
      logMessage: "Todo list loaded",
    };
  }

  addItem(value, prio) {
    this.setLogMessage("Item added to list");
    const currList = this.state.list;
    const idToAdd =
      currList.length > 0 ? currList[currList.length - 1].id + 1 : 0;
    const item = {
      id: idToAdd,
      value: value,
      priority: prio,
    };
    this.setState({
      list: this.state.list.concat([item]),
    });
  }

  removeItem(item) {
    this.setLogMessage("Item deleted from list");
    const newList = this.state.list.filter((i) => i.id !== item);
    this.setState({
      list: newList,
    });
  }

  setLogMessage(string) {
    console.log(string);
    this.setState({
      logMessage: string,
    });
  }

  clearMessage() {
    this.setState({
      logMessage: "",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <InputComponent
          onAddItem={(value, prio) => this.addItem(value, prio)}
        ></InputComponent>
        <LogComponent
          onClearMessage={(_) => this.clearMessage()}
          message={this.state.logMessage}
        ></LogComponent>
        <ListComponent
          list={this.state.list}
          onRemoveItem={(item) => this.removeItem(item)}
        ></ListComponent>
      </div>
    );
  }
}

export default App;
