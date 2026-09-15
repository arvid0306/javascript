function countBs(word){
    let firstLetter = word[0];
    
    return countChar(word, firstLetter);
}

function countChar(word, type){
    let lenghtWord = word.length;
    let total = 0;

    for(let number = 0; number < lenghtWord; number += 1){
        let history = word[number];

        if(history === type){
            total += 1;
        }
    }
    return total;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));