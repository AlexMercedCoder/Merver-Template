//////////////////////////////
// App Responder (Routes)
// Make responses in response folder then register them with responder here
//////////////////////////////
const {Responder} = require('am-merver')
const responder = new Responder()

// Import Responses
const root = require('./responses/root')

// Register Responses
responder.newResponse(root)

// Export Responder
module.exports = responder