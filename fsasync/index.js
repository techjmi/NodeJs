const fs = require("fs").promises;
//for async function u need callback function

fs.writeFile("asyn.txt", "this will create async file using nodejs");
