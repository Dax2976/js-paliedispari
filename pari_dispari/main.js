// Pari e Dispari
// L’utente sceglie pari o dispari e 
//inserisce un numero da 1 a 5.
// Generiamo un numero
// random (sempre da 1 a 5) 
//per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due 
//numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let inputPariorDispari = prompt('scegli pari o dispari')
let inputNumber =  prompt('inserisci un numero compreso da 1 a 5')


if(inputNumber < 1 || inputNumber > 5){
    inputNumber = parseInt(alert('attenzione ti ho detto di inserisce da 1 a 5 la prossima volta ti banno!'))
    console.log(location.reload())
}
console.log(inputNumber)



//function for gen numbers
let randomNumbers;

function genRandom(randomNumbers) {
    randomNumbers = Math.floor(Math.random()*5 +1)
    return randomNumbers
}
console.log(genRandom(randomNumbers))


//function for check the win

let sum = parseInt(inputNumber + randomNumbers)

let calc;

function check_pari_dispari(calc){
    if(inputPariorDispari == 'pari' && sum % 2 == 0){
        return `you WIN  ${sum} è pari`
    } else if (inputPariorDispari == 'dispari' && sum % 2 != 0){
        return `you WIN ${sum} è dispari`
    } else {
        return `you lose pari${sum} non è ${inputPariorDispari} FATALITY`
    }
}

console.log(check_pari_dispari(calc))