const express = require("express");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");

const app = express();

dotenv.config({ path: "backend/config/config.env" });
const db = require("./config/mongoose");
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to uncaughtException");
  process.exit(1);
});

app.use(express.json());
app.use("/", require("./routes/index"));
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error on running the server:${err}`);
  } else {
    console.log(`Server is running on port:${process.env.PORT}`);
  }
});

// Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
