import React, { Component } from "react";
import "./Delete.css";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // maybe try to make the edit/delete hidden until your mouse hovers over them?

  render() {
    return (
      <div>
        <button onClick={() => this.props.deletePostFn(this.props.id)} className="deletebutton">DELETE</button>
      </div>
    );
  }
}
