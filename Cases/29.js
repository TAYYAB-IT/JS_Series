function viralAdvertising(n) {
    // Write your code here
const day_find=n-1
var like=0
var cumulative=0
for(let i=0;i<=day_find;i++){
 if(i==0){
 like=2;
 cumulative=like;
}
else{
    like=Math.floor((like*3)/2);
    cumulative=cumulative+like
}
}
return cumulative;
}
const n=3; //Day to report
console.log(viralAdvertising(n))