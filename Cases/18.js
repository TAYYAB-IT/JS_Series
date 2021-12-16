function sockMerchant(n, ar) {
    // Write your code here
unique=ar.filter((value,index)=>{
return index==ar.indexOf(value)
})
 count=0

for (i of unique){
c=0
for(j of ar){
    if(i==j){
        c++;
    }
}

 count+=parseInt(c/2);
}
return count;
}
const n=9
const ar=[10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(9,ar))