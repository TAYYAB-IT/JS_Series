const { sign } = require("crypto");

function diagonalDifference(arr) {
    // Write your code here
    sum1=0,sum2=0;
for(x in arr ){
for(y in arr[x]){
    if(x==y){
        sum1+=arr[x][y]
    }
}
}
var y=arr.length-1
for ( x in arr){
   sum2+=arr[x][y]
   y--;
    }
    diff=sum1-sum2
if(Math.sign(diff)==-1)
diff=-1*diff
return diff
}
let n=3
arr=[[11,2,4],[4,5,6],[10,8,-12]]
console.log(diagonalDifference(arr))