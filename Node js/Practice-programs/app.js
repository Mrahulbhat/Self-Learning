const { log } = require('console');
const fs = require('fs');


let a=10;
let b=20;

let sum = a+b;
let product=  a*b;

let data = `Sum: ${sum}\nProduct: ${product}`;
console.log(data);

fs.writeFile('demo-text.txt',data,(err)=>{
    if(err){
        throw err;
    }
    log('Data has been written successfully');
});