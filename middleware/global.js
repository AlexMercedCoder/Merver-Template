//////////////////////////////////////
// Global Middleware
//////////////////////////////////////
const { Middler } = require("am-merver");
const middler = new Middler();

//REGISTER MIDDLEWARE

//basic logger
middler.addMiddleware((req, res) => {
  console.log(`${req.method} request sent to ${req.url} `);
});
//bodyparser
middler.addMiddleware(middler.bodyParser);

//Export Middler
module.exports = middler;
