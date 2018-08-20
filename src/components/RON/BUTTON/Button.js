import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.generate()} className="generate" />
      </div>
    );
  }
}
