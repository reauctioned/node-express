const names = require('./names')
const sayHi = require('./utils')
// console.log(names);
// console.log(sayHi);
const calledPerson = require('./alternative')
// console.log(calledPerson);

sayHi('saurav')
sayHi(names.name1)
sayHi(names.name2)

require('./mind-grenade')
