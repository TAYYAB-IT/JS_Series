function birthday(s, d, m) {
  var sum = 0;
    // Write your code here
    count=s.filter((value,index)=>{
      if(m==1){
        var  sum=value
        var x=index+1}
      else{
        var  sum=0
        var x=index} 
        for(i=0;i<m&&x<=(s.length-1);i++){
           sum+=s[x]
           x+=1
        }
      return sum==d
    })
return count.length
}
const n=2
const arr=[1,4]
const d=4
const m=1
console.log(birthday(arr,d,m))