function permutationEquation(p) {
    // Write your code here
    const result=[]
   var  x=1;
    p.forEach(()=>{
       result.push( p.indexOf(p.indexOf(x)+1))
       x++;
    })
return result.map((value)=>value+=1)
}
permutationEquation([4,3,5,1,2]).forEach((value=>{console.log(value)}))