import React, { Component } from "react";
import './Card.css';
import axios from "axios";
import Edit from "./Edit";
import Delete from "./Delete";


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      deleteQuote: this.props.ronQuote,
      quotes: this.props.ronQuote
    };
    // this.updateCard = this.updateCard.bind(this)
    // this.deleteCard = this.deleteCard.bind(this)
  }

  // updateCard(id, quote) {
  //   axios
  //     .put(`/api/quotes?id=${id}`, { quote })
  //     .then(res => this.setState({ quotes: res.data }));
  // };

  // deleteCard(id) {
  //   console.log(id, 'id')
  //   axios
  //     .delete(`/api/quotes/${id}`)
  //     .then(res =>
  //       this.setState({ deleteQuote: res.data }));
  //   // console.log(ronQuote, 'del')
  // }

  render() {

    let newArr = this.props.ronQuote.map((e, i) => {
      console.log(e.id)
      return (
        < div className="card" key={e.id}>
          <h6 className="createquote">"{e.quote}" -Ron Swanson</h6>
          <Edit
            updateCardFn={this.props.updateCardFn}
            id={e.id}
            quote={e.quote}
            toggleInput={this.props.toggleInput}
            showInput={this.props.showInput}
          />
          <Delete
            deletePostFn={this.props.deleteCardFn}
            id={e.id} />
        </div >
      )
    })

    return (
      <div>
        {newArr}
      </div >
    );
  }
}


