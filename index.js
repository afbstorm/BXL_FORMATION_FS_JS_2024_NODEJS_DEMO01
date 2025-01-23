const chalk = require('chalk');

const time = new Date().toLocaleTimeString("FR-be", {
    timeStyle: "short"
});

console.log(`Nous écrivons cette démo à exactement ${chalk.hex('ff0000').bold(time)}`);


