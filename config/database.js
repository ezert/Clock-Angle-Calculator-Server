const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://ezert:senha123@genericdb-srjtr.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
