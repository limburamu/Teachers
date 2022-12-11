const express = require('express');
const app = express();
require('./data/db.connection');
const routes = require('./routes');

app.use('/api', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use('/api', routes);

const server = app.listen(process.env.PORT || 8000, function() {
    console.log('listening to port', server.address().port);
});