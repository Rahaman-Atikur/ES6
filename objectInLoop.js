const person = {
    name:'Mike',
    age: 10,
    status:'not found'
}
for(let key in person){
    console.log(`key: ${key} value ${person[key]}`);
}