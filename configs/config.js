////////////////////////////////////////
//Server Configuration Object
///////////////////////////////////////
const middler = require("../middleware/global");
const responder = require("../controllers/responder");

module.exports = {
  PORT: process.env.PORT || 3000,
  responder,
  middler,
  allowOrigin: "*",
  requestMethod: "*",
  allowMethods: "OPTIONS, GET",
  allowHeaders: "*",
  mwTimeout: 10,
  resTimeout: 200,
  cache: 3000,
  serveStatic: true,
  publicFolder: "./public"
};
