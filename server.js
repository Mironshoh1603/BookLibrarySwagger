const env = require("dotenv").config({ path: "./config.env" });
const app = require("./middleware/app");
require("./config/db");
const port = process.env.PORT || 3000;



app.listen(port, process.env.HOST, () =>
  console.log(`Example app listening on port ${port}!`)
);
