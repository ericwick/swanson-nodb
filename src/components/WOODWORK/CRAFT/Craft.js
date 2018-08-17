import React, { Component } from "react";
import axios from "axios";

export default class Craft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      newQuote: "",
      Quote: ""
    };
    this.quoteCreate = this.quoteCreate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("/api/quotes").then(response => {
      console.log("response:", response);
      this.setState({
        lines: response.data
      });
    });
  }

  quoteCreate(e) {
    this.setState({ Quote: e.target.value });
  }

  render() {
    return (
      <div>
        {/* <h5>HELLO</h5> */}
        <div>
          <input placeholder="hello" onChange={e => this.quoteCreate(e)} />
        </div>
        <div>
          <p>{this.state.Quote}</p>
          <p>{this.state.lines}</p>
        </div>
      </div>
    );
  }
}

// axios
// .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/59")
// .then(response => {
//   console.log(response.data);
//   quotes.push(response.data);
// });
