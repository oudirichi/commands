moment = require("moment");
var fs = require('fs');
var snakeCase = require('lodash/snakeCase');
var path = require('path');

module.exports = {
  run: function(args) {
    function done(err) {
      console.log(err);
      process.exit();
    }


    var now = moment();
    var formatted = now.format('YYYYMMDDHHmmss');
    var target = path.join(__dirname, '..', formatted + "_" + snakeCase(args[0]) + ".js");
    var source = path.join(__dirname, '..', 'template', 'migration.js');
    var rd = fs.createReadStream(source);
    rd.on("error", function(err) {
      done(err);
    });

    var wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
      done(err);
    });

    rd.pipe(wr);
  }
}
