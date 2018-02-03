var args = process.argv.slice(2);

var method = require("./commands/" + args[0] + ".js");
method.run(args.slice(1));
