var Zone = require('../models/Zone');

module.exports = {
   find: function(params, callback) {
      Zone.find(params, function(err, zone) {
         if(err) {
            callback(err, null);
            return;
         }
         callback(null, zone);
      });
   },
   
   findById: function(params, callback) {
      Zone.find(params, function(err, zone) {
         if(err) {
            callback(err, null);
            return;
         }
         callback(null, zone);
      });
   }, 
   update: function() {
      
   }, 
   create: function() {
      
   },
   delete: function() {
      
   }
};