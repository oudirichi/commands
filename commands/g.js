module.exports = {
  run: function(args) {
    var method = require("../generator/" + args[0] + ".js");
    method.run(args.slice(1));
  }
}
