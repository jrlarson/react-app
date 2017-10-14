'use strict';
module.exports = function(app) {
  var dataController = require('../controllers/DataController');

  // Data Routes
  app.route('/data')
    .get(dataController.get_data)
 
};