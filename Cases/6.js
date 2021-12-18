function miniMaxSum(arr) {
    // Write your code here
max=arr.reduce((ret,val)=>
    ret+=val)
  
    var min=max-Math.max.apply(0,arr);
    max-=Math.min.apply(0,arr)
console.log(min+" "+max)
}

arr=[1,2,3,4,5]
miniMaxSum(arr)
