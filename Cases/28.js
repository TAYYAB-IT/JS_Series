function beautifulDays(i, j, k) {
    // Write your code here
  const  beauty_days=[]
for(let val=i;val<=j;val++){
    var rev=val.toString().split('').reverse().join("");  
 //   console.log(rev)  
if((Math.abs(val-rev)%k==0)){
    beauty_days.push(val)
}
}
return beauty_days.length;
}
const i=20
const j=23
const k=6
console.log(beautifulDays(20,23,6))