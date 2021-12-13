function gradingStudents(grades) {
    // Write your code here
    var arr=[]
for(val of grades){
 x=val;
 if(x<38){
     arr.push(x)
     continue;
 }
 else{
     while(x%5!==0)
     x++;
 }
 if((x-val)<3){
     arr.push(x)
 }
 else{
     arr.push(val)
 }

}
return arr
}
let n=4
let grades=[73,67,38,33]
result=gradingStudents(grades)
for (value of result){
    console.log(value)
}