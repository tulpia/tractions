const express = require("express");

const app = express();
const port = 3001;
const api = require("./api");

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

// TODO : Faire les routes

// app.get("/", (req, res) => {
//   api
//     .getMerchants()
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// app.post("/merchants", (req, res) => {
//   api
//     .createMerchant(req.body)
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// app.delete("/merchants/:id", (req, res) => {
//   api
//     .deleteMerchant(req.params.id)
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });
