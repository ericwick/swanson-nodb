import React, { Component } from "react";
import "./Edit.css";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: '',
      inputBox: false
    }
  }

  handleChange(e) {
    this.setState({ line: e.target.value })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.toggleInput} className="editbutton">EDIT</button>
        {this.props.showInput ?
          <div>
            <input onChange={e => this.handleChange(e)} className="editinput" />
            <button onClick={() => this.props.updateCardFn(this.props.id, this.state.line)} className="editbuttonsubmit" />
          </div>
          : null}
      </div>
    );
  }
}
