const axios = require("axios");
let quotes = [];
var id = 0;

module.exports = {
  getQuotes: async (req, res, next) => {
    let lines = []
    await axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        lines.unshift(response.data[0]);
      });

    quotes = lines.map((quote, i) => {
      id++
      return {
        quote: quote,
        id: id
      };
    })

    res.status(200).json(quotes);
  },

  create: (req, res, next) => {
    let line = {
      quote: req.body.quote,
      id: quotes.length + 1
    }

    console.log(line, 'line')

    quotes.unshift(line)
    res.status(200).json(quotes);
  },

  update: (req, res, next) => {
    let newQuoteId = req.params.id;
    let updateId = quotes.findIndex(quotes => quotes.id == newQuoteId);
    let newQuote = quotes[updateId];

    Object.assign(newQuote, req.body)

    res.status(200).json(quotes);
  },

  delete: (req, res, next) => {
    let deleteId = req.params.id;

    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].id == deleteId) {
        quotes.splice(i, 1)
      }
      console.log(quotes[i].id, 'quotesid')
      console.log(deleteId, 'deleteId')
    }

    console.log(quotes);
    res.status(200).json(quotes);
  }
}
