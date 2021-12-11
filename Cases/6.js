function miniMaxSum(arr) {
    // Write your code here
max=arr.reduce((ret,val)=>
    ret+=val)

min=max-arr[arr.length-1]
console.log(min+" "+max)
}

arr=[1,2,3,4,5]
miniMaxSum(arr)