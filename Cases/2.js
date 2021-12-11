function aVeryBigSum(ar) {
    // Write your code here
sum=ar.reduce((total,val)=>
total+=val
)
return sum
}
n=5
x=[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSum(x))