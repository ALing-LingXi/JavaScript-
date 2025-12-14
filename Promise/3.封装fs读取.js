
function MinRead(path){
  const fs= require("node:fs")
  const rpath = require("node:path")
  const Fpath = rpath.resolve(__dirname,path)
  return new Promise((resolve,reject)=>{
    fs.readFile(Fpath,(error,data)=>{
      if(error){
        reject(error)
      }
      else{
        resolve(data)
      }
    })
  })
}
MinRead("./resource/笔记.txt").then((result)=>{
console.log(result.toString());
},(reason)=>{
console.log(reason);
})