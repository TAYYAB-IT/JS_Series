function breakingRecords(scores) {
    // Write your code here
  high=low=scores[0]
  max=min=0;
for(j in scores){
    

if(high>scores[j]){
    max++
    high=scores[j]
}
else if(low<scores[j]){
    min++
    low=scores[j]
}
}

return min+" "+max
}
const n=9
arr=[10 ,5 ,20, 20, 4 ,5 ,2 ,25, 1]
console.log(breakingRecords(arr))