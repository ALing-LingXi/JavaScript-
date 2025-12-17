function Promise(executor) {
  this.PromiseResult = null
  this.PromiseState = "pending"
  this.callBacks = []
  const resolve = (data) => {
    if (this.PromiseState !== "pending") return
    this.PromiseState = "fulfilled"
    this.PromiseResult = data
    this.callBacks.forEach((callBack) => {
      if(callBack.onResolve)
      callBack.onResolve(data)
    })
  }
  const reject = (data) => {
    if (this.PromiseState !== "pending") return
    this.PromiseState = "rejected"
    this.PromiseResult = data
    this.callBacks.forEach((callBack) => {
      if(callBack.onReject)
      callBack.onReject(data)
    })
  }
  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function (onResolve, onReject) {
  const self = this
  if(typeof onResolve !== "function")
    onResolve = value=>value
  if(typeof onReject!== "function")
    onReject = reason=>{throw reason}
  return new Promise((resolve, reject) => {
    function callFunction(type) {
      try {
        let result = type(self.PromiseResult)
        if (result instanceof Promise) {
          result.then(v => {
            resolve(v)
          }, r => {
            reject(r)
          })
        }
        else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }
    if (this.PromiseState === "fulfilled") {
      callFunction(onResolve)
    }
    if (this.PromiseState === "rejected") {
      callFunction(onReject)
    }
    if (this.PromiseState === "pending") {
      this.callBacks.push({
        onResolve: function () {
          callFunction(onResolve)
        }
        , onReject: function () {
          callFunction(onReject)
        }
      })
    }
  })
}