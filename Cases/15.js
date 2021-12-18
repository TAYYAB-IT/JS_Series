function migratoryBirds(arr) {
    // Write your code here
var unique=arr.filter((value,index,arr)=>{
    return index==arr.indexOf(value)
}).sort((a,b)=>a-b)
const elements_length=[]
for(let i of unique){
    count=0
    for(let j of arr){
        if(i==j){
            count++
        }
    }
    elements_length.push(count)
} 
const max=Math.max.apply(0,elements_length)
 const tot=[]
 elements_length.forEach((value,index)=>{
    if(value==max){
      tot.push(index)
    }
})
return unique[tot[0]];
}
const n=11
const arr=[1, 2, 3 ,4 ,5 ,4 ,3, 2, 1, 3, 4]
console.log(migratoryBirds(arr))