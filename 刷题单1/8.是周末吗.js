function daysUntilWeekend(dateString) {
  const date = new Date(dateString)
  const Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const daynum = Days[date.getDay()]
  if(daynum==="Saturday"||daynum==="Sunday"){
    return "It's the weekend!"
  }
  if(date.getDay()===5){
    return `1 day until the weekend.`
  }
  else{
   let disnum = 6-date.getDay()
    return `${disnum} days until the weekend.`
  }
}