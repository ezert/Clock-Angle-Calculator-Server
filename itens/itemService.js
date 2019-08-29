const Item = require('./item.js');

Item.methods(['get', 'post', 'put', 'delete']);

Item.updateOptions({ new: true, runvalidators: true });

module.exports = Item;