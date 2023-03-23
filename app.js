const morgan = require("morgan");
const express = require("express");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());

app.use(morgan("tiny"));

app.use(function (req, res, next) {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App is runing on port ${port}`);
});
