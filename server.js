const { Merver } = require("am-merver");
const config = require("./configs/config");

//Application Object
const app = new Merver(config);

//Listen
app.listen();
