function birthday(s, d, m) {
    // Write your code here
    count=s.filter((value,index)=>{
        sum=0
        x=index
        for(i=0;i<m&&x<=m;i++){
           sum+=s[x]
           x+=1
        }
      return sum==d
    })
return count.length
}
const n=5
const arr=[1, 2, 1, 3, 2]
const d=3
const m=2
console.log(birthday(arr,d,m))