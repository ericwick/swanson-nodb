const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;
const qc = require("./controller/quote_controller");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/quotes", qc.getQuotes);
app.post("/api/quotes", qc.create);
app.delete("/api/quotes/:id", qc.delete);
app.put("/api/quotes/:id", qc.update);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
