function climbingLeaderboard(ranked, player) {
    // Write your code here
    unique=ranked.filter((value,index)=>index==ranked.indexOf(value)) //unique the ranked scores as same scorer occupy same rank
    var rank=[] //for rank of player
    for( i of player){
        val=unique.length
        //console.log(val)
        for(j in unique ){
            if(i>=unique[j]){
            val=parseInt(j);
            break;}
        }
      rank.push(val+1)  //pushing rank of player in array by adding 1 as array start from 0 index.
    }
    //console.log(rank)
    return rank;
}
const n=7;
const ranked=[100,100,50,40,40,20,10]
//const ranked=[100 ,90 ,90 ,80 ,75 ,60,5]
const m=4;
const player=[5,25,50,120];
//const player=[50 ,65 ,77 ,90 ,102]
result=climbingLeaderboard(ranked,player);
result.forEach((value)=>console.log(value))