// Massivlar

const colors=['red','blue','green','yellow','pink'];
console.log(colors.length);

// POP massiveni oxiridagi elementni ochiradi

colors.pop();
console.log(colors);
// PUSH massiveni oxiriga element qoshadi
colors.push('orange');
console.log(colors);

// Shift - Dastlabki elementni ochiradi
colors.shift();
console.log(colors);
// Unshift- dastlabki element qoshadi
colors.unshift('mycolor');
console.log(colors);


// Itteratsiya haqida 
const cars=['BMW',"MERC","AUDI",'SUZIKI','Subari'];
for (let k of cars){
    console.log(k);
};
for (let i =0;i<cars.length;i++){
    console.log(cars[i]);
}

cars.forEach(
    (item,index,arr)=>{
        console.log(`The item is ${item}, index of ${index} from ${arr}`);
    }
)
const socialMedia='youtube, Telegram, Instagram';
const mySocial=socialMedia.split(', ');
console.log(mySocial);

const myNewSocial=socialMedia.split(', ').join(' -')
console.log(myNewSocial);
cars.sort();
console.log(cars);