const person={
    name:"samar",
    year:2001,
    job:'Full stack developer',
    hobies:{
        sport:"Football",
        games:'UFC'
    }
}

for (let k in person){
    console.log(`Property :${k} : Values ${person[k]}`);
}