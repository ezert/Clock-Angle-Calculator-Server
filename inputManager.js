const keyGenerator = require('./keyGenerator');
const storageManager = require('./storageManager');
const processInput = require('./processInput');

module.exports = ((h, min) => {

    let key = keyGenerator(h, min);

    let cacheValue = storageManager.getValue(key);

    if (cacheValue != null) {
        return cacheValue;
    }

    let result = processInput(h, min);

    storageManager.storeValue(key, result);

    return result;

})()