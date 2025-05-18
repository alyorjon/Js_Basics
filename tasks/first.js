const numberOfSeries=+prompt("How many do you watch movies");

const moveisDB={
    count:numberOfSeries,
    series:{},
    actors:{},
    genres:{},
    private:false
}
for (let i =0 ;i<2; i++){
    const a=prompt(`Last movies that you watched ${i}?`);
    const b=prompt(`Give score to this  ${i} moveis`);

    if (a!==null && b!==null && a!=='' && b!==''){
        moveisDB.series[a]=b
    }else {i--;}
}
if (moveisDB.count<5){
    console.log(`You wacht less movies`);
}else if (moveisDB.count>2  && moveisDB.count<=4){
    console.log('Juda kam kino koribsiz');
}else {
    console.log('Siz juda kop kino koribsiz');
}