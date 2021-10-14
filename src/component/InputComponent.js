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

  handleFormEnter(e) {
    e.preventDefault();
    this.handleAdd();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleFormEnter(e)}>
        <input
          className="text-input"
          type="text"
          onChange={(e) => this.handleTextChange(e)}
        ></input>
        <select
          className="priority-dropdown"
          name="priority"
          onChange={(e) => this.handleSelectChange(e)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button className="add-button" onClick={this.handleAdd}>
          Add
        </button>
      </form>
    );
  }
}

export default InputComponent;
