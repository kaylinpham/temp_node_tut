//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const { peter, john } = require("./4-names");
const sayHi = require("./5-utils");

require("./7-mind-grenade");

sayHi("susan");
sayHi(john);
sayHi(peter);
