var chalk = require("chalk");

var message = "Hello " + chalk.blue("out there!");
var rainbow = function() {
  console.log(chalk.bgBlue("======================="));
  console.log(chalk.bgGreen("======================="));
  console.log(chalk.bgYellow("======================="));
  console.log(chalk.bgRed("======================="));
  console.log(chalk.bgMagenta("======================="));
  console.log(chalk.bgCyan("======================="));
  }

console.log(message);

rainbow();