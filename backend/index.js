const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "backend/config/config.env" });
const db = require("./config/mongoose");

app.use(express.json());
app.use("/", require("./routes/index"));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error on running the server:${err}`);
  } else {
    console.log(`Server is running on port:${process.env.PORT}`);
  }
});
