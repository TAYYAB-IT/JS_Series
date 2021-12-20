function saveThePrisoner(n, m, s) {
    var ind=s;
    // Write your code here
for(let i=m-1;i>0;i--){
    
    if(ind>=n){ind=1}
    else if(i!=m){ind++}
}
return ind
}
const t=1
const n=3 //No. of Prisoners
const m=7 //No. of candies
const s=3//staring seat
console.log(saveThePrisoner(n,m,s))