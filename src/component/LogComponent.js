import React from "react";

import "./LogComponent.css";

class LogComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
    };
  }

  componentDidMount() {
    setInterval(this.props.onClearMessage, 3000);
  }

  componentDidUpdate() {
    setInterval(this.props.onClearMessage, 3000);
  }

  render() {
    return <p>{this.props.message}</p>;
  }
}

export default LogComponent;
