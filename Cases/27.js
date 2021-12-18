function angryProfessor(k, a) {
    // Write your code here
if(a.filter((value)=>value<=0).length<k){return "Yes"}
else{return "NO"}
}
const t=2
 n=4,k=3
a=[-1,-3,4,2]
console.log(angryProfessor(k,a))
n=4,k=2
a=[0,-1,2,1]
console.log(angryProfessor(k,a))