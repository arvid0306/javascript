let storlek = 8;
let ordning = "";

for(let rad = 0; rad < storlek; rad += 1){
    for(let kolumn = 0; kolumn < storlek; kolumn += 1){
        if((rad + kolumn) % 2 == 0) {
            ordning += " ";
        }
        else{
            ordning += "#";
        }
    }
    ordning += "\n";
}
console.log(ordning);