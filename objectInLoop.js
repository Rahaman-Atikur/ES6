const person = {
    name:'Mike',
    age: 10,
    status:'not found'
}
// for(let key in person){
//     console.log(`key: ${key} value ${person[key]}`);
// }

for(let [key,value] of Object.entries(person)){     //Array Distraction
    console.log(`key:${key} value:${value}`);
}