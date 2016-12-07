var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');

module.exports = router;

router.get('/:resource', function(req, res, next) {
 
  var resource = req.params.resource;
  
  if(resource === 'zone') {
     ZoneController.find(req.query, function(err, results) {
        if(err) {
           res.json({
              confirmation:'fail',
              message: err
           });
            return;
        }
        res.json({
           confirmation: 'success',
           results: results 
        });
     });
  }
});

router.get('/:resource/:id', function(req, res, next) {
  
  var resource = req.params.resource;
  var id = req.params.id;
  
  if(resource === 'zone') {
     ZoneController.findById(id, function(err, results) {
        if(err) {
           res.json({
              confirmation:'fail',
              message: "Not Found"
           });
            return;
        }
        res.json({
           confirmation: 'success',
           results: results 
        });
     });
  }
});

router.post('/:resource', function(req, res, next) {
  
  var resource = req.params.resource;
  console.log(resource)
  if(resource === 'zone') {
     ZoneController.create(req.body, function(err, results) {
        if(err) {
           res.json({
              confirmation:'fail',
              message: "Not Found"
           });
            return;
        }
        res.json({
           confirmation: 'success',
           results: results 
        });
     });
  }
});