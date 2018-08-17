const axios = require("axios");
const quotes = [];
const id = 0;

module.exports = {
  getQuotes: (req, res, next) => {
    axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        console.log(response.data);
        quotes.unshift(response.data);
      });

    res.status(200).json(quotes[0]);
  },
  create: (req, res, next) => {
    let { id } = req.body;
    quotes.push({ id });
    id++;

    res.status(200).json(quotes);
  },
  update: (req, res, next) => {
    let { id } = req.body;
    let newQuoteId = req.params.id;
    let updateId = quotes.findIndex(quotes => quotes.id === newQuoteId);
    let newQuote = quotes[newQuoteId];

    newQuote = { id: newQuote.id };

    res.status(200).json(quotes);
  },
  delete: (req, res, next) => {
    let deleteQuoteId = req.params.id;
    if (deleteQuoteId === quotes.id) {
      quotes.splice(quotes.id, 1);
    }

    res.status(200).json(quotes);
  }
};
