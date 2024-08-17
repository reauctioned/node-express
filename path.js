const path = require('path')

console.log(path.sep);

console.log( filePath = path.join('/content','subfolder','test.txt'));

const baseName = path.basename(filePath)
console.log(baseName);


const pathResolve = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(pathResolve)