// Matrix Builder 矩阵构建器
function buildMatrix(rows, cols) {
  const num =  []
  for(let i=0;i<rows;i++){
    num.push([])
    for(let j =0;j<cols;j++){
      num[i].push(0)
    }
  }
  return num;
}
