import React, { Component } from "react";
import axios from "axios";
import Card from "./Cards/Card";
// import Input from "./Cards/Input";

export default class Craft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      word: ``,
      quotes: []
    };
    this.createCard = this.createCard.bind(this);
    this.createQuote = this.createQuote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createCard(quote) {
    axios
      .post("/api/quotes", { quote })
      .then(response => {
        console.log(response)
        this.setState({ quotes: response.data })
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    // e.preventDefault();
    this.setState({ word: e.target.value });
  }

  createQuote() {
    let { word } = this.state;

    this.createCard(word);
    this.setState({ word: "" })
  }

  // onChange should update the empty word state
  // onSubmit should send that imformation to a createCard function

  render() {
    console.log(this.state.quotes)
    return (
      <div>
        <input type="text" onChange={e => this.handleChange(e)} />
        <button onClick={this.createQuote} />

        <div>
          <Card ronQuote={this.state.quotes} />
        </div>

      </div>
    );
  }
}

