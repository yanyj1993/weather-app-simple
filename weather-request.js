const request = require('request');
const config  = require('./config');


let weatherRequest = (callback) => {
    request(config.url, callback);
};

module.exports = weatherRequest;