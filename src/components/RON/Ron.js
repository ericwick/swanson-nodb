import React, { Component } from "react";
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
      console.log("response:", res);
      this.setState({
        oneLine: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <h4>
          I'm a simple man. I like pretty, dark-haired women, and breakfast
          food.
        </h4>
        <h1>-SWANSON-</h1>

        <div>
          <Button generate={this.randomQuote} />
        </div>

        <p>{this.state.oneLine}</p>
      </div>
    );
  }
}
