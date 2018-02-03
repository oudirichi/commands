var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var compression = require('compression');
var router = express.Router();
app.use(compression({filter: shouldCompress}))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

var port = process.env.PORT || 8080;

router.get('/', function(req, res) {
  var data = []
  for (var i = 0; i<= 7000; i++) {
    data.push({ requirement_id: i, specification_id: i});
  }
    res.json({ data: data });
});
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
