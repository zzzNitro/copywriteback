require('dotenv').config();
const server = require('./src/app.js');
const axios = require('axios');

server.listen(process.env.PORT || 3001, async () => {
console.log('%s listening at 3001'); // eslint-disable-line no-console
});