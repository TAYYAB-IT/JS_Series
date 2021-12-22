function acmTeam(topic) {
    // Write your code here
const count=[]
for(let x=0;x<topic.length-1;x++){
    for(let y=x+1;y<topic.length;y++ ){
      var d=0;
    
          for(let val=0;val<topic[x].length;val++){
              if(topic[x][val]=='1'||topic[y][val]=='1'){d++}
          }
          count.push(d)
      }
    }
max=Math.max.apply(0,count);
var c=0;
//console.log(count)
count.forEach((Value)=>{if(Value==max){c++}})
return [max,c];
}

acmTeam(['10101', '11100','11010','00101']).forEach((value)=>console.log(value))