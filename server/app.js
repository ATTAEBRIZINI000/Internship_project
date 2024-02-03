const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();


const userRouter = require("./routers/user");

const app = express();

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

app.use(morgan("dev"));
app.use(express.json());
app.use("uploads", express.static("uploads"));

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", userRouter);


//-----------------------------Handling errors---------------------//
app.use((req, res, next) => {
  const error = new Error(`error 404 rout not found`);
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;