function range(start, end, step = 1){
    let lista = [];
    if(step > 0){
        for(; start <= end; start += step)
        lista.push(start);
    }
    else if(step < 0){
        for(; start >= end; start += step)
        lista.push(start);
    }
    return lista;
}

function sum(lista){
    let total = 0;
    for(let tal of lista){
        total = total + tal;
    }
    return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));