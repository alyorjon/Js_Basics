//Foydalanuvchi kiritgan son musbat yoki
//  manfiy ekanligini aniqlaydigan dastur tuzing
const number=+prompt("Input a number:");
if (number%2==0){
    console.log(`The number is even: ${number}`);
} else {
    console.log(`The number is odd:${number}`);
}

// Ikki son kiritilganda ulardan kattasini topish dasturini yozing
const num1=+prompt("enter the first number:");
const num2=+prompt("enter the second number:");

if (num1>num2){
    console.log(`The number ${num1} is big` );
} else if (num1<num2){
    console.log(`The number ${num2} is big`);
}else {
    console.log(`The numbers are the same`);
}


// Uchburchakning tomonlari berilgan. Uchburchak bor yoki 
// yo'qligini tekshiring (a + b > c, a + c > b, b + c > a).
const a=+prompt("Birinchi tomonni kiriting:");
const b=+prompt("Ikkinchi tomonni kiriting:");
const c=+prompt("Uchunchi tomonni kiriting:");

if (a+b>c && a+c>b && a<b+c){
    console.log("Uchburchak mavjud");
}else {
    console.log("Uchburchak mavjud emas");
}
// Son 5 ga karrali ekanligini tekshiruvchi dastur tuzing.
const num3=+prompt("Enter a number:")
if (num3%5==0){
    console.log("Son 5 ga karrali");
}else {
    console.log("Son 5 ga karrali emas");
}
// Kichik yoki katta harf kiritsa, uning katta yoki kichik harf ekanligini aniqlaydigan dastur.
const str1=prompt("Write down string");
if (str1.toUpperCase() ===str1){
    console.log("word is uppercase");
}else {
    console.log("Word is lowercase");
}