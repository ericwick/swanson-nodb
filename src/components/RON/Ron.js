import React, { Component } from "react";
import "./Ron.css";
import Button from "./BUTTON/Button";
import axios from "axios";

export default class Ron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneLine: [],
      oneQuote: ""
    };
    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    axios.get("/api/quotes").then(res => {
      // console.log("response:", res);
      this.setState({
        oneLine: res.data[0].quote
      });
    });
  }

  render() {
    // console.log("oneLine", this.state.oneLine);
    return (
      <div>
        <h4 className="titlequote">
          I'm a simple man. I like pretty, dark-haired women, and breakfast
          food.
        </h4>
        <h1 className="title">-SWANSON-</h1>

        <p className="randomQuote">{this.state.oneLine}</p>

        <div>
          <Button generate={this.randomQuote} />
        </div>
      </div>
    );
  }
}
