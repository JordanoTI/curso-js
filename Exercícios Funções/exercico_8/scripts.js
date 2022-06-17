function contar(string) {
    if (string.length > 10) {
        console.log(`O texto contem ${string.length} carcteres, ele é mto longo!`);
    } else {
        console.log(`O texto contem ${string.length} carcteres, ele esta dentro do limite!`);
    }
}

console.log(contar("Jordano"));
console.log(contar("Jordanossss"));