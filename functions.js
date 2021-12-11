//function add(a,b){
//    return a+b}
//x=add
//console.log(x(2,3))
//const x = (x, y) => x * y;
//console.log(x(2,3))

//(function(){let z=4;console.log(z)})() //Self Calling Function
//x=(y,z)=>y+z  //Arrow function
//console.log(x(2,3))
function person(){
    this.name=arguments[0]
    this.age=arguments[1]
    this.txt=()=>{
        return this.name+" is "+this.age+" old."
    }
}
x=new person("Khalid",19)
console.log(x.name)
console.log(x.txt())