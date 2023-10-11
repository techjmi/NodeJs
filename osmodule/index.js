//to check bit....64 or 32
const os = require('node:os');
console.log(os.arch());
// console.log(os.EOL());
//to check free memory in system
const freememory=os.freemem();
console.log(`${freememory/1024/1024/1024}`)
// check total memory in system
const Totalmemory=os.totalmem();
console.log(`${Totalmemory/1024/1024/1024}`)
console.log(os.hostname());
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())