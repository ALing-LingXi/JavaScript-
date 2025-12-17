
class Promise {
  constructor(executor) {
    this.PromiseState = "pending"
    this.PromiseResult = null
    this.callBacks = []
    const self = this
    function resolve(data) {
      if (self.PromiseState != "pending") return
      if (data instanceof Promise) {
        data.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }
      else {
        self.PromiseResult = data
        self.PromiseState = "fulfilled"
        self.callBacks.forEach(callBack => {
          if (callBack.onResolve) {
            queueMicrotask(() => {
              callBack.onResolve(data)
            })
          }
        })
      }
    }

    function reject(data) {
      if (self.PromiseState != "pending") return
      if (data instanceof Promise) {
        data.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }
      else {
        self.PromiseResult = data
        self.PromiseState = "rejected"
        self.callBacks.forEach(callBack => {
          if (callBack.onReject) {
            queueMicrotask(() => {
              callBack.onReject(data)
            })
          }
        })
      }

    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onResolve, onReject){
      const self = this
  if (typeof onResolve !== "function") {
    onResolve = result => result
  }
  if (typeof onReject !== "function") {
    onReject = (reason) => {
      throw reason
    }
  }
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
      queueMicrotask(() => {
        callFunction(onResolve)
      })
    }
    if (this.PromiseState === "rejected") {
      queueMicrotask(() => {
        callFunction(onReject)
      })
    }
    if (this.PromiseState === "pending") {
      this.callBacks.push({
        onResolve: function () {
          callFunction(onResolve);
        }
        , onReject: function () {
          callFunction(onReject)
        }
      })
    }
  })
  }
  static resolve(data){
    return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      data.then(v => {
        resolve(v)
      }, r => {
        reject(r)
      }
      )
    }
    else {
      resolve(data)
    }
  })
  }
  static reject(data){
    return new Promise((resolve, reject) => {
    reject(data)
  })
  }
  static race(promises){
    return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        resolve(v)
      }, r => {
        reject(r)
      })
    }
  })
  }
  static all(promises){
     let num = 0
  let arr = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        num++
        arr[i] = v
        if (num === promises.length) {
          resolve(arr)
        }
      }, r => {
        reject(r)
      })
    }
  })
  }
}
