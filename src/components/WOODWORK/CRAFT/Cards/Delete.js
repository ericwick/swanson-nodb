import React, { Component } from "react";
import "./Delete.css";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.deletePostFn(this.props.id)} className="deletebutton">DELETE</button>
      </div>
    );
  }
}
