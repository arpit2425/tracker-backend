const express = require("express");
const mongoose = require("mongoose");
require("./models/userModel");

const authRoute = require("./routes/authRoute");
require("dotenv").config({ path: `${__dirname}/../config.env` });
const app = express();
app.use(express.json());
app.use(authRoute);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("HI");
});
app.listen(3000, () => {
  console.log("listening");
});
