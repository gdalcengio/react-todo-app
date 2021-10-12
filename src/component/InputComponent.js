import React from "react";

import "./InputComponent.css";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);

    this.state = {
      text: "",
      prio: "low",
    };
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSelectChange(e) {
    this.setState({
      prio: e.target.value,
    });
  }

  handleAdd() {
    this.props.onAddItem(this.state.text, this.state.prio);
  }

  render() {
    return (
      <div>
        <input
          className="text-input"
          type="text"
          onChange={(e) => this.handleTextChange(e)}
        ></input>
        <select name="priority" onChange={(e) => this.handleSelectChange(e)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default InputComponent;
