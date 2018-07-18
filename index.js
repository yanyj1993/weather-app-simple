// add by yanyj 20180718 start
const weatherRequest = require('./weather-request');

weatherRequest(function (err, response, body) {
    if(err){
        console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        console.log(`It's ${weather.main.temp} degrees in ${weather.name}`)
    }
});
// add by yanyj 20180718 end