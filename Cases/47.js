function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
/*nt p: the price of the first game
int d: the discount from the previous game price
int m: the minimum cost of a game
int s: the starting budget
*/
var count=0;
var sum=0
var pre;
var i=false;
while(sum<=s){
    if(!i){sum=p 
        pre=p;
    i=true;
    }
    else{
       if((pre-d)>=m){
        sum+=(pre-d)
        pre-=d;
    }

        else{
         sum+=m;
        }
    }
   // console.log(sum)
    if(sum<=s){
        count++;
    }
    else{
        break;
    }
}
return count;
}
console.log(howManyGames(20,3,6,70));
