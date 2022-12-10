const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

const server = app.listen(8000, function() {
    console.log('listening to port: ', server.address().port);
});