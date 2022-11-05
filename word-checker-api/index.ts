var express = require("express");
const http = require("http");
var debug = require("debug")("azurewebapp:server");
import bodyParser from "body-parser";
import cors from "cors";

import APIv1 from "./controllers/v1";

let router = express.Router();

const port = process.env.PORT || "3000";

var app = express();

app.set("port", port);
app.use(bodyParser.text());
app.use(cors());

setInterval(() => {
  // Hack to keep Azure web app alive
  console.log(process.memoryUsage().rss / 1024 / 1024);
}, 60000);

const home = router.get("/", function (req, res, next) {
  res.send("OK");
});

app.use(home);
app.use("/api/v1/", async (req, res, next) => {
  APIv1(router)
  router(req, res, next);
});

const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
});
