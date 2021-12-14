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
var arr=[18,29,14,15,9,0,12,34,25,29]
//arr.forEach(check);

// Another format
function check2(x){
    let promis=new Promise((resolve,reject)=>{
        if(x>=18){
           resolve(" is an Adult Age")
         }
    
         reject("Below than 18")
        })
        promis.then((value)=>{
            console.log(value)
        },
        (err)=>{
            console.log(err)})
}


arr.forEach(check2);