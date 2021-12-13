async function check(x){
    
    let promis=new Promise((resolve)=>{
        if(x>=18){
            resolve(x+ " is an Adult Age")
        }
        else{
            resolve("Below than 18")
        }
    });
    console.log(await promis)
}
arr=[18,29,14,15,,9,0,12,34,25,29]
arr.forEach(check);