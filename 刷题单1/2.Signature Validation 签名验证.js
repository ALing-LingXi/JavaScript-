/* Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:
给定一个消息字符串、一个秘密密钥字符串和一个签名号，使用以下编码方法确定签名是否有效：

Letters in the message and secret key have these values:
消息中的字母和密钥有这些值：
a to z have values 1 to 26 respectively.
a  ~  z 取值分别为 1  ~  26 。
A to Z have values 27 to 52 respectively.
A  ~  Z 取值分别为 27  ~  52 。
All other characters have no value.
所有其他字符都没有价值。
Compute the signature by taking the sum of the message plus the sum of the secret key.
通过计算消息的和加上秘密密钥的和来计算签名。
For example, given the message "foo" and the secret key "bar", the signature would be 57:
例如，给定消息 "foo" ，秘钥 "bar" ，那么签名将是 57 ：

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57 */

function verify(message, key, signature) {
  const word1 = message.match(/[a-zA-Z]/g)||[]
  const word2 = key.match(/[a-zA-Z]/g)||[]
const messagenum = word1.reduce((sum,word)=>{
  if(word>="a"&&word<="z"){
    return sum+(word.charCodeAt(0)-96)
  }
   if(word>="A"&&word<="Z"){
    return sum+(word.charCodeAt(0)-38)
  }return sum;
},0)
  const keynum = word2.reduce((sum,word)=>{
  if(word>="a"&&word<="z"){
    return sum+(word.charCodeAt(0)-96)
  }
   if(word>="A"&&word<="Z"){
    return sum+(word.charCodeAt(0)-38)
  }return sum;
},0)
  if(keynum+messagenum===signature)
    return true
  else 
    return false
}
