function pageCount(n, p) {
    // Write your code here
min=start=end=0
start=Math.ceil((p-1)/2)
if(n%2==0 &&(n-p==1 ||n-p==2)){
    end=1
}
else if(n%2!=0 &&n-p==1){
end=0
}
else{
    end=Math.floor((n-p)/2)
}
//console.log(start,"  ",end)
if(end>start)
{
    return start
}
else{
    return end
}}
const n=6
const p=2
console.log(pageCount(n,p))