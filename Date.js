//* If you don't pass any parameter, it autmatically take currunt date time.
/*new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string
    */
d=new Date(2018,10,12)
console.log(d.toDateString()) //Most readable format Date
console.log(d.toString()) //Just Convert it to String 
//new Date(dateString) creates a new date object from a date string:
d=new Date("December 21,2021 3:9:20 PM")
console.log(d.toTimeString()) // Most readable format Time
console.log(d.toDateString())
/*getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.*/ 





///////////////Set Methods
/*
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/
//d.setFullYear(2020);
//d.setFullYear(2020, 11, 3);