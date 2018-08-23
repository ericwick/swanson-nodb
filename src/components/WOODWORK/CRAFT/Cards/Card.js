import React, { Component } from "react";
import "./Card.css";
import Edit from "./Edit";
import Name from "./Name";
import Delete from "./Delete";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      deleteQuote: this.props.ronQuote,
      quotes: this.props.ronQuote
    };
  }

  render() {
    let newArr = this.props.ronQuote.map((e, i) => {
      return (
        <div className="card" key={e.id}>
          <h6 className="createquote">"{e.quote}" -Ron Swanson</h6>
          <Edit
            updateCardFn={this.props.updateCardFn}
            id={e.id}
            quote={e.quote}
            toggleInput={this.props.toggleInput}
            showInput={this.props.showInput}
          />
          <Delete deletePostFn={this.props.deleteCardFn} id={e.id} />
          <Name />
        </div>
      );
    });
    return <div>{newArr}</div>;
  }
}
