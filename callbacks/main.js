const firstLog=()=>{
    setTimeout(function(){
        console.log(object);
    },1000)
}

firstLog()



function greeting(callback){
    console.log('Hello students!');
    callback()
    console.log("Functions is closed");
}

greeting(function(){
    console.log('Are you ready today');
});
greeting(()=>{
    console.log('Arrow functions');
})

const hisoblash =(a,b,callback)=>{
    let natija =a+b;
    callback(natija);
};
const natijaniKorish=(qiymat)=>{
    console.log(`Sizning natijangiz ${qiymat}`);
}

hisoblash(4,9,natijaniKorish);

// Massivni qayta ishlash

let myNumber=[1,2,3,45,6];
const harBIrElementniQaytaIshlash=(massiv,callback)=>{
    for (let i =0;i<massiv.length;i++){
        callback(massiv[i],i);
    }
}

harBIrElementniQaytaIshlash(myNumber,function(element,index){
    console.log(`${index}- element:${element}`);
});


function tugmaniQosh(id, callbackFunksiya) {
    // HTML dokumentida yangi tugma yaratamiz
    const tugma = document.createElement('button');
    tugma.id = id;
    tugma.innerText = "Bosing";
    document.body.appendChild(tugma);
    
    // Tugmaga bosish hodisasini qo'shamiz
    tugma.addEventListener('click', function(event) {
        callbackFunksiya(event);
    });
}

// Tugmani qo'shamiz va ishlatiladigan callback funksiyasini beramiz
tugmaniQosh("menintugmam", function(event) {
    console.log("Tugma bosildi!");
    event.target.style.backgroundColor = "red";
});