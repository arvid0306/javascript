function min(firstNumber, secondNumber){
    if(firstNumber < secondNumber){
        return firstNumber;
    }
    else if(firstNumber > secondNumber){
        return secondNumber;
    }
    else{
        return ("Båda nummer är lika stora");
    }
}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0, 0));