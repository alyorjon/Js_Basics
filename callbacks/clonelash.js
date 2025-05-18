const person={
    name:'Aisha',
    age:26,
    hobbies :{
        games:"UFC"
    }
}

// Itteratsiya qilish orqali clonelash

const copyObj=(obj)=>{
    let clone={};
    for (let k in obj){
        clone[k]=obj[k]
    }
    return clone
}
const secondPerson=copyObj(person);
secondPerson.age=22;