function Promise(executor) {
  this.PromiseState = "pending"
  this.PromiseResult = null
  this.callBacks = []
  const self = this
  function resolve(data) {
    if (self.PromiseState != "pending") return
    self.PromiseResult = data
    self.PromiseState = "fulfilled"
    self.callBacks.forEach(callBack => {
      if (callBack.onResolve) {
        callBack.onResolve(data)
      }
    })
  }
  function reject(data) {
    if (self.PromiseState != "pending") return
    self.PromiseResult = data
    self.PromiseState = "rejected"
    self.callBacks.forEach(callBack => {
      if (callBack.onReject) {
        callBack.onReject(data)
      }
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
  return new Promise((resolve, reject) => {
    function callFunction(type) {
      {
        try {
          let result = type(self.PromiseResult)
          if (result instanceof Promise) {
            result.then(result => {
              resolve(result)
            }, reason => {
              reject(reason)
            })
          }
          else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
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
//第二版箭头函数
