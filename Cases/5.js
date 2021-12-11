function staircase(n) {
    // Write your code here
for(let i=0;i<n;i++){
    let out=""
    for(j=n-1;j>=0;j--){
        
if(j<=i){
out+="#"
}
else{
    out+=" "
}
    }
    console.log(out)
}
}
let n=6
staircase(n)