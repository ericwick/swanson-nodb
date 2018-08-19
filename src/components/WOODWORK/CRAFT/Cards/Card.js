import React, { Component } from "react";
// import Input from "./Input";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ronArray: [],
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {

  }


  render() {
    let { ronQuote } = this.props;

    console.log(ronQuote, 'arr')

    let newArr = ronQuote.map((e, i) => {
      return (
        <div>
          {e}
        </div>
      )
    })

    return (
      <div>
        {newArr}
      </div>
    );
  }
}

