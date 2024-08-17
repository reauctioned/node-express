const path = require('path')

console.log(path.sep);

console.log( filePath = path.join('/content','sumfolder','test.txt'));

const baseName = path.basename(filePath)
console.log(baseName);


const pathResolve = path.resolve(__dirname,'content','sumfolder','test.txt')
console.log(pathResolve)