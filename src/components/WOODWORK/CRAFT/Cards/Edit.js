import React, { Component } from "react";

export default class Edit extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.handleChange} />
      </div>
    );
  }
}
