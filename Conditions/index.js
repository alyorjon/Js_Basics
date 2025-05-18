// Shartli operatorlar


const trafficLight='green';


if (trafficLight=='red'){console.log('Stop!');}
else if (trafficLight=='yellow'){console.log('Yellow');}
else if (trafficLight=='green'){console.log('Gooooo');}

const age=+prompt("How old are you?",5);
console.log(age);
if (age<18){
    console.log("No access");
}else if (age >=18 && age<=25){
    console.log("Access1");
}
else {
    console.log("age is wrong26");
}




// Switch case conditions
// Switchda faqat teng bo'lishi kerak
switch (trafficLight){
    case 'red':
        console.log("Stop");
        break
    case 'yellow':
        console.log("Prepage");
        break 
    case 'green':
        console.log("Goooo");
        break
    default:
        console.log("No one2");
}



// Skills

