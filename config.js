// add by yanyj 20180718 start
// 命令行参数
const argv = require('yargs').argv;

const apiKey = '330ebb62265d60c3a792ecf58b998e41';
const city = argv.c || 'Nanjing';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

module.exports = {
    apiKey,
    city,
    url
};
// add by yanyj 20180718 end
