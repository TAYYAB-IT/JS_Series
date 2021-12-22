function encryption(s) {
    // Write your code here
    const L=Math.sqrt(s.length);
    var row=Math.floor(L);
    var coloumn=Math.ceil(L);
    while((row*coloumn)<s.length){if(row>coloumn){coloumn+=1}else{row+=1}}
    const str=[];
    var result='';
    var i=0;
    while(i<s.length){
        if(i+coloumn<=s.length-1){
        str.push(s.slice(i,i+coloumn))}
        else{
            str.push(s.slice(i,s.length))
        }
        i+=coloumn;

    }
    //console.log(str)
    //console.log(row," ",coloumn)
        for(let i=0;i<coloumn;i++){
        for(let j=0;j<row;j++){
            if(str[j][i]!=undefined){
               // console.log(j," ",i,"=",str[j][i] )
        result+=str[j][i];
            }
        }
        result+=" ";
        }
        return result;
}
console.log(encryption('chillout'))