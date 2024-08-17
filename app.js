const os = require('os')
// const {} = require('os')

const user = os.userInfo()//returns user info
console.log(user);

const sysUptime = console.log(`Sys Up Time: ${(((os.uptime())/60)/60)} hours`);

