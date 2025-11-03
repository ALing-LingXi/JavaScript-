/* Word Counter 单词计数器
Given a sentence string, return the number of words that are in the sentence.
给定一个句子字符串，返回该句子中的单词数。

Words are any sequence of non-space characters and are separated by a single space.
单词是由一个空格分隔的非空格字符的任意序列。
 */

function countWords(sentence) {
 const num1= sentence.split(" ")
 sentence = num1.filter((word)=>word!=" ").length
  return sentence;
}