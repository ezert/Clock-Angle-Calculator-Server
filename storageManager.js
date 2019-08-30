const cache = require('memory-cache');

module.exports = {
    
    getValue : (key) => {
        return cache.get();
    },

    storeValue : (key, result) => {
        cache.put(key, result);
    }

}