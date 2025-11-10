function getExtension(filename) {
  const find = /\.([^.]+$)/
 const result =  filename.match(find)
 return result?result[1]:"none"
}
const add = getExtension("ajjsjsj.js.html")
console.log(add);
