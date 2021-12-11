//JSON To Normal
let text_json = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//console.log(text_json)
text_Str=JSON.parse(text_json)
console.log(text_Str)
//Normal To JSON
const x=JSON.stringify(text_Str)
console.log(x)

