module.exports = {
    endpoint: '/',
    GET: (req, res) => {res.html(`<h1>It Works!</h1>`)},
    POST: (req, res) => {res.json({it: 'works'})},
    PUT: (req, res) => {res.json({it: 'works'})},
    DELETE: (req, res) => {res.json({it: 'works'})}
}