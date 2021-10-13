import React from "react";
import "./ListItem.css";

function ListItem(props) {
  const classes = `list-description ${props.prio}`;

  return (
    <li className="list-item">
      <input className="list-box" type="checkbox"></input>
      <p className={classes}>
        {props.desc}
        <span
          className="list-delete-button"
          onClick={(_) => props.removeItem(props.id)}
        >
          x
        </span>
      </p>
    </li>
  );
}

export default ListItem;
