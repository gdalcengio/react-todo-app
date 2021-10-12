import React from "react";
import ListItem from "./ListItem";
import "./ListComponent.css";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   list: [],
    // };
  }

  render() {
    return <ul className="list">{this.props.list}</ul>;
  }
}

export default ListComponent;
