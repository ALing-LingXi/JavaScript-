function getWeekday(dateString) {
 const Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const date =new Date(dateString)
  return Days[date.getDay()];
}