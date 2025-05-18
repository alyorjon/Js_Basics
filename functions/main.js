
// Function declarations
function hello(){
    console.log("Hello world");
}

hello();

const age=22;
// Functions params
function showHelloToUser(name){
    const age=18;
    console.log(`Hello my friend ${name}. His age is ${age}`);
}

showHelloToUser('Aisha')

// array functions

const myarr=()=>{
console.log('my array functions');
};

myarr();

const mySubArr=(a,b)=>{
    return a**b
}
let res=mySubArr(2,4);
console.log(res);

const isOddOrEven=(number)=>{
    if (number%2==0){
        return "Even";
    }else {
        return "Odd";
    }
};
const results=isOddOrEven(88);
console.log(results);

const sumNumbers=(a,b)=>{
    return a+b
}
console.log(sumNumbers(11,22));

const findBiggestNumber=(a,b,c)=>{
    if (a>b && a>c){
        return a
    }else if (b>a && b>c){
        return b
    }else if (c>a && c>b){
        return c
    }
}

console.log(findBiggestNumber(4,5,6));

const isPolindrom=(str)=>{
    // Satrni kichik harflarga o'tkazamiz va bo'sh joylarni olib tashlaymiz
    const cleaned = str.toLowerCase().replace(/\s+/g, '');

    // Teskari satrni hosil qilamiz
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}
console.log(isPolindrom('kiyik'));

const getEvenNumbers=(arr)=>{
    let subArr=new Array();
    for (let k of arr){
        if (k%2==0){
            subArr.push(k)
        }
        console.log(k);
    }
    console.log(subArr);
    return subArr;
}

getEvenNumbers([1,3,5,8,9,14]);

const countChars=(str)=>{
    const result={};
    for (let k of str.toLowerCase()){
        if (k===" ")continue
        if (result[k]){
            result[k]++;
        }  
        else {
        result[k]=1;
    
    }
        }
    return result
}
countChars('haha');