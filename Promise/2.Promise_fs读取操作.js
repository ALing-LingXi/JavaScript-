const path = require("node:path")
const Fpath = path.resolve(__dirname,"./resource/笔记.txt")
const fs = require("node:fs")
const { log } = require("node:console")
const p = new Promise((resolve,reject)=>{
  fs.readFile(Fpath,(error,data)=>{
  if(error){
    reject(error)
  }
  else{
   resolve(data)
  }
})
})

p.then((result)=>{
  console.log(result.toString());
},(reason)=>{
  console.log(reason);
})