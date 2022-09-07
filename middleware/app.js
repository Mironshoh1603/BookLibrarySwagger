const express = require("express");
const app = express();
const ErrorController = require("../controller/errorController");
const bookRouter = require("../routes/book");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book",
      version: "1.0.0",
      description: "A simple Book API",
    },
    servers: [{ url: "http://localhost:8000/api/v1" }],
  },
  apis: ["./swagger/*.js"],
};

const jsDoc = swaggerJsDoc(options);
// app.get("/", (req, res) => res.send("Hello World!"));
app.use(express.json());
app.use("/api/v1/book/", bookRouter);
app.use("/", swaggerUI.serve, swaggerUI.setup(jsDoc));

app.all("*", function (req, res, next) {
  next(new AppError(`this url has not found: ${req.originalUrl}`, 404));
});

app.use(ErrorController);
module.exports = app;
