function Promise(executor){
  this.PromiseState = "pending"
  this.PromiseResult = null
  this.callBacks=[]
  const self = this
  function resolve(data){
    if(self.PromiseState!="pending") return
    self.PromiseResult = data
    self.PromiseState = "fulfilled"
   self.callBacks.forEach(callBack=>{
    if(callBack.onResolve){
      callBack.onResolve(data)
    }
   })
  }
  function reject(data){
 if(self.PromiseState!="pending") return
    self.PromiseResult = data
    self.PromiseState = "rejected"
      if(self.callBack.onReject){
    self.callBack.onReject(data)
    }
    self.callBacks.forEach(callBack=>{
    if(callBack.onReject){
      callBack.onReject(data)
    }
   })
  }
 
  try {
    executor(resolve,reject)
  } catch (error) {
    console.log(error);
  }
}
Promise.prototype.then = function(onResolve,onReject){
  if(this.PromiseState==="fulfilled"){
    onResolve(this.PromiseResult)
  }
  if(this.PromiseState==="rejected"){
    onReject(this.PromiseResult)
  }
  if(this.PromiseState==="pending"){
    this.callBacks.push({
      onResolve,onReject
    })
  }
}
//第二版箭头函数
