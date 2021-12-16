
function getMoneySpent(keyboards, drives, b) {
    max=-1
   for (i of keyboards){
       for(j of drives){
         if((i+j)>max && (i+j)<=b){
            max=i+j
         }
       }
   }
return max
}
const b=10
const n=2
const m=3
const keyboards=[3,1]
const drives=[5,2,8]
console.log(getMoneySpent(keyboards,drives,b))