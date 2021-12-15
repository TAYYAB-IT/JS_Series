function divisibleSumPairs(n, k, ar) {
     x=0
     count=[]
    for(i in ar){
        for(j in ar){
            if(ar[i]<ar[j] && ((ar[i]+ar[j])%k==0)){
               x++
           // count.push([i,j])
        } }}
         //   count.forEach((value)=> {console.log(value)})
            return x
}
const n=6
const k=3
const arr=[1, 3, 2, 6, 1, 2]
console.log(divisibleSumPairs(n,k,arr))