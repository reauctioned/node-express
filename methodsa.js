//async methods

const { log } = require("console");
const { readFile, writeFile, write } = require("fs");

readFile("./content/subfolder/result.txt",'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  // console.log(result);
  const first = result;
  readFile("./content/subfolder/test.txt",'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return 
    }
    const second = result 
    writeFile("./content/subfolder/testasync.txt",' This is the result a',(err,result)=>
    {
      if(err)
      {
        return 
      }
      console.log('done');

      
    })
    })
});
