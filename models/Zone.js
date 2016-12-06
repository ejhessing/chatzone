var mongoose = require('mongoose');

var ZoneSchema = new mongoose.Schema({
   name: {type:String, default:'' },
   postCode: {type:String, default:''},
   timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);
