var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Test Page' });
});

//  по пути http://localhost:3000/test/example/a 
// и пример отработки нескольких функций
router.get('/example/a',
 function (req, res, next) {
  console.log('привет из А!');
  next();
}, 
 function (req, res) {
  res.send('Hello from A!');
});

module.exports = router;