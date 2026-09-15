let siffror = 0;

for(let number = 0; number < 100; number += 1) {
    siffror += 1;
    if(siffror % 3 == 0 && siffror % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(siffror % 3 == 0) {
        console.log("Fizz");
    }
    else if(siffror % 5 == 0) {
        console.log("Buzz");
    }
    else{
        console.log(siffror);
    }
}