function kangaroo(x1, v1, x2, v2) {
    // Write your code here
if((x1<x2 && v1<=v2)||(x1>x2 &&v1>=v2)){
return "NO"
}
else{
    if(x1<x2){
    while(x1<x2 &&x1!=x2){
        x1+=v1
        x2+=v2
    }
}
else{
    while(x2<x1 &&x1!=x2){
        x1+=v1
        x2+=v2
    } 
}
    if(x1==x2){
    //    console.log(x1)
        return "YES"
    }
    else{
        return "NO"
    }

}
}
const x1=0;
const v1=3;
const x2=4;
const v2=2;
console.log(kangaroo(x1,v1,x2,v2))
