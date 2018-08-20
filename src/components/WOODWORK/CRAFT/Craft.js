import React, { Component } from "react";
import './Craft.css';
import axios from "axios";
import Card from "./Cards/Card";
// import Input from "./Cards/Input";

export default class Craft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      word: ``,
      quotes: [],
      showInput: false
    };
    this.createCard = this.createCard.bind(this);
    this.createQuote = this.createQuote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);

  }

  createCard(quote) {
    // let quoteArr = this.state.quotes
    console.log(quote)
    axios
      .post("/api/quotes", { quote })
      .then(response => {
        console.log(response, 'response')
        // quoteArr.unshift(response.data)
        this.setState({ quotes: response.data })
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({ word: e.target.value });
  }

  createQuote() {
    let { word } = this.state;

    this.createCard(word);
    this.setState({ word: "" })
  }


  deleteCard(id) {
    console.log(id, 'id')
    axios
      .delete(`/api/quotes/${id}`).then(res => this.setState({ quotes: res.data }))
    // .then(res =>
    // this.setState({ deleteQuote: res.data }));
    // console.log(ronQuote, 'del')
  }

  updateCard(id, quote) {
    console.log(id, quote)
    axios
      .put(`/api/quotes/${id}`, { quote })
      .then(res => this.setState({ quotes: res.data, showInput: !this.state.showInput }));
  };

  // onChange should update the empty word state
  // onSubmit should send that imformation to a createCard function

  render() {
    console.log(this.state.quotes)
    return (
      <div className="input">
        <div>
          <input type="text" onChange={e => this.handleChange(e)} placeholder="CREATE YOUR OWN RON QUOTE" className="inputbar" />
        </div>
        <div>
          <button onClick={this.createQuote} className="inputbutton"></button>
        </div>

        <div>
          <Card ronQuote={this.state.quotes}
            deleteCardFn={this.deleteCard}
            updateCardFn={this.updateCard}
            toggleInput={() => this.setState({ showInput: !this.state.showInput })}
            showInput={this.state.showInput}
          />
        </div>
      </div>
    );
  }
}

