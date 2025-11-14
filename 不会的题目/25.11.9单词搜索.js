/* 
Word Search 单词搜索
Given a matrix(an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.
  给定一个由单个字母组成的矩阵（数组的数组）和一个要查找的单词，返回该单词在矩阵中的起始和结束索引。

The given matrix will be filled with all lowercase letters(a - z).
  给定的矩阵将被所有小写字母（ a - z ）填充。
The word to find will always be in the matrix exactly once.
  要找到的单词总是在矩阵中正好出现一次。
The word to find will always be in a straight line in one of these directions:
寻找这个词总是在以下方向的一条直线上：
left to right 从左到右
right to left 从右到左
top to bottom 从上到下
bottom to top 从下到上
For example, given the matrix:
例如，给定矩阵：

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:
而单词 "cat" ，返回：

[[0, 1], [2, 1]]
Where[0, 1] are the indices for the "c"(start of the word), and[2, 1] are the indices for the "t"(end of the word).
  其中[0, 1] 为 "c" （词首）的索引，[2, 1] 为 "t" （词尾）的索引。 */


  function findWord(matrix, word) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [
        [0, 1],   // 右
        [0, -1],  // 左  
        [1, 0],   // 下
        [-1, 0]   // 上
    ];
    
    // 遍历每个单元格
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // 检查四个方向
            for (const [dr, dc] of directions) {
                let found = true;
                
                // 检查单词的每个字母
                for (let i = 0; i < word.length; i++) {
                    const nr = r + dr * i;
                    const nc = c + dc * i;
                    
                    // 检查是否越界或不匹配
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || 
                        matrix[nr][nc] !== word[i]) {
                        found = false;
                        break;
                    }
                }
                
                // 如果找到匹配，返回起点和终点
                if (found) {
                    const start = [r, c];
                    const end = [r + dr * (word.length - 1), c + dc * (word.length - 1)];
                    return [start, end];
                }
            }
        }
    }
    
    return null; // 理论上不会执行到这里，因为题目保证单词存在
}