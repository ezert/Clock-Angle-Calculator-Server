const md5 = require('md5');

module.exports = ((h, min) => {

    return md5(h + ',' + min);

})()