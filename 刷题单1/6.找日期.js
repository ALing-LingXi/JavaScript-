function getWeekday(dateString) {
 const Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const date =new Date(dateString)
  return Days[date.getDay()];
}
const a =getWeekday(2024-11-4)
console.log(a);
