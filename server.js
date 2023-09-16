const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;
const Pool = new sql.ConnectionPool(config/string)

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

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



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


app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})

