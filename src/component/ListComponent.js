import React from "react";
import ListItem from "./ListItem";
import "./ListComponent.css";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.list.map((element, index) => (
      <ListItem
        key={index}
        id={element.id}
        prio={element.priority}
        desc={element.value}
        removeItem={(item) => {
          this.props.onRemoveItem(item);
        }}
      ></ListItem>
    ));
    return <ul className="list">{list}</ul>;
  }
}

export default ListComponent;
