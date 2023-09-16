const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const videos = require("../exampleresponse.json");
app.use(express.json());
const port = 3000;
const db = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});


app.get("/", function (req, res) {
    return res.status(404).json("all reviews");
});

pp.get("/reviews", async function (req, res) {
  const result = await db.query("SELECT * FROM review");
  if (result.rows.length === 0) {
    return res.status(404).json({ error: "no reviews" });
  }
    return res.status(200).json(result.rows);
  } 
);

