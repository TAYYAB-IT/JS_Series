//arrays are mutable,values could be changed,
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
//console.log(fruits.slice(0,2));
//console.log(fruits.sort())
//console.log(fruits.toString()) //toString() converts an array to a string of (comma separated) array values.
//console.log(fruits.join("|")) // join() method also joins all array elements into a string.
//fruits.push('Lemon')
//console.log(fruits)
//fruits.pop()
//console.log(fruits)
//fruits.unshift("Lemon")
//fruits.shift()
//console.log(fruits)
//The concat() method can take any number of array arguments:
//We can use splice() for both adding and removing
//console.log(fruits.splice(0,2)) //Also return deleted items
//console.log(fruits)
//splice(start, deleteCount,insertion value1,.....) //For inserting
//splice(start, deleteCount) //For Deletion
//console.log(fruits.sort())
arr=[5,4,3,2,1,4,9,6,7,8] 
//arr.sort((y,z)=>y-z) //Asceding Order
//arr.sort((y,z)=>z-y)  //Descending Order
//arr.sort((y,z)=>y-z).reverse() //Descending Order
//console.log(arr)
//console.log(arr)
/*When the sort() function compares two values, it sends the values to the compare function, 
and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative y is sorted before z.
If the result is positive z is sorted before y.
If the result is 0 no changes are done with the sort order of the two values. */
//arr=Math.max.apply(0,arr) //find Max 
//console.log(arr)
//arr=Math.min.apply(0,arr) //Find Min
//console.log(arr)
//* Math.min.apply(0, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)
/*book=[{name:"The Path",price:400},
{name:"Hole of Life",price:550},
{name:"Guardian",price:450}
]
//Sorting Objects
book.sort((y,z)=>y.price-z.price) //sort accrding to increasing price
console.log(book[2].price)
book.sort((y,z)=>{
    x=y.name.toLowerCase()
    n=z.name.toLowerCase()
    if( x>n){
        return 1
    }
    else if (x<n) {
        return -1
    }
    else{
        return 0
    }
})
console.log(book[2].name)
*/

arr=[19,12,17,65,23,88,65] 
/*var total=0
//forEach(funtionname)  //Don't write  pranthesis() in argument funtion
//ForEach function call the function for each element of array 
arr.forEach((value,index,arra)=>{
total+=value
})
console.log(total)
*/
//map() create a new array and return the calculted value for each array member
/*sqr_arr=arr.map((value)=>
value**2
)
console.log(sqr_arr)
*/
//filter() just filter your array for a specific reason
/*
Adult_=arr.filter((value)=>
 value>=18
)
console.log(Adult_)
*/
//reduce() just reduce your array to a single value after auto-recurrsions return the final value
total=arr.reduce((ret,val)=>
ret+=val)
console.log(total)

//The every() method check if*/
//console.log(arr.indexOf(65))
//console.log(arr.lastIndexOf(65))
//console.log(arr.includes(65)) //return true if value found in array
//The find() method returns the value of the first array element that passes a test function.
/*console.log(arr.find((value)=>
value>=18
))*/

