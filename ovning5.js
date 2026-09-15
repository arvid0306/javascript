function isEven(n){
    if(n == 0){
        return Boolean = true;
    }
    else if(n == 1){
        return Boolean = false;
    }
    else if(n < 0){
        return Boolean = false;
    }
    else{
        n = n - 2;
        return isEven(n);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));