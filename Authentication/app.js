const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ApiError = require("./utils/ApiError");
const globalErrorHandler = require("./controllers/globalErrorHandler");
const mountRoutes = require("./routes/index");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

app.use(cors());
app.options("*", cors());

const dbConnection = require("./config/db");

dbConnection();

mountRoutes(app);
app.all("*", (req, res, next) => {
  next(new ApiError(`Cant find ${req.originalUrl} in this server`, 404));
});
app.use(globalErrorHandler);

const port = process.env.SERVER_PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
