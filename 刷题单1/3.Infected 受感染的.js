/* On November 2nd, 1988, the first major internet worm was released, infecting about 10% of computers connected to the internet after only a day.
1988年11月2日，第一个主要的互联网蠕虫病毒被释放，仅一天后就感染了大约10%的联网计算机。

In this challenge, you are given a number of days that have passed since an internet worm was released, and you need to determine how many computers are infected using the following rules:
在此挑战中，您将获得自互联网蠕虫释放以来已经过的天数，您需要使用以下规则确定受感染的计算机数量：

On day 0, the first computer is infected.
在第0天，第一台计算机被感染。
Each subsequent day, the number of infected computers doubles.
随后的每一天，受感染计算机的数量都会翻一番。
Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected computers by 20%. Round the number of patched computers up to the nearest whole number.
每隔三天，在病毒传播后应用一个补丁，将受感染的计算机数量减少20%。将打补丁的计算机数量四舍五入到最接近的整数。
For example, on: 例如，on：

Day 0: 1 total computer is infected.
第0天：总共有1台计算机被感染。
Day 1: 2 total computers are infected.
第1天：总共有2台计算机被感染。
Day 2: 4 total computers are infected.
第二天：总共有4台计算机被感染。
Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.
第三天：总共有8台电脑被感染。然后贴片：感染8 * 20% = 1.6贴片。将1.6四舍五入到2。8台电脑被感染- 2台打补丁= 3天后总共有6台电脑被感染。
Return the number of total infected computers after the given amount of days have passed.
在给定的天数过后返回受感染计算机的总数。

 */

function infected(days) {
let flag=0,computernum=1
while(days>0){
  computernum*=2
  flag++
  days--
  if(flag===3){
    computernum = computernum-Math.ceil(computernum*0.2)
    flag=0
  }
}

  return computernum;
}