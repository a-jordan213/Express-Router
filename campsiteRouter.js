const express = require('express');
const campsiteRouter = express.Router(); //obj to use expr router meth

campsiteRouter.route('/') //setting itup in server.js. these are all chained
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end('Will add the campsite: ${req.body.name} with description: ${req.body.description}');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;