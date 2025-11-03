/* Given a string representing a variable name, convert it to "spooky case" using the following constraints:
给定一个表示变量名的字符串，使用以下约束将其转换为“spooky case”：

Replace all underscores (_), and hyphens (-) with a tilde (~).
将所有下划线（ _ ）和连字符（ - ）替换为波浪号（ ~ ）。
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
字符串的第一个字母大写，之后的每个字母都大写。计数时忽略波浪字符。其他字母小写。
For example, given hello_world, return HeLlO~wOrLd.
例如，给定 hello_world ，返回 HeLlO~wOrLd 。

 */
//！！！！！！！！！！字符串不能直接修改！！！！！！！！！
/* function spookify(boo) {
const regex = /_|-/g
const boo1 = boo.replace(regex,"~")
let flag = 0
for(let i = 0;i<boo1.length;i++){
  if(boo1[i]!="~"){
    if(flag%2===0){
      boo1[i]=boo1[i].toUpperCase()
      flag++
    }
    else{
      flag++
    }
  }
}
  return boo1;
}

let boo = "_-ppp"
const boo1 = spookify(boo)
console.log(boo1);
 */

console.log("正确版本");
function spookify(boo) {
const regex = /_|-/g
const boo1 = boo.replace(regex,"~")
let flag = 0
let str=""
for(let i = 0;i<boo1.length;i++){
  if(boo1[i]!="~"){
    if(flag%2===0){
      str+=boo1[i].toUpperCase()
      flag++
    }
    else{
        str+=boo1[i].toLowerCase()
      flag++
    }
  }
  else{
    str+=boo1[i]
  }
}
  return str;
}

let boo = "thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"
const boo1 = spookify(boo)
console.log(boo1);

