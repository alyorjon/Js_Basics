const person={
    name:"samar",
    year:2001,
    job:'Full stack developer',
    hobies:{
        sport:"Football",
        gamess:'UFC',
        games:'UFC1',
    },
    sayHello:function(){
        console.log(`My name is ${this.name}`);
    }
}

for (let k in person){
    if (typeof person[k]==='object'){
        for (let i in person[k]){
            
        console.log(`Property :${k}, Values ${person[k][i]}`);
        }
    }else{
        
    console.log(`Property :${k} : Values ${person[k]}`);
    }
}

// for in -- faqat object uchun
// for of --faqat  massive uchun 

console.log(Object.keys(person));


person.sayHello();

const {name,age,job,hobies:{sport}}=person;
console.log(person);