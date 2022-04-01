// Palidroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione 
// per capire se la parola inserita è palindroma


function check_palindroma(word){
    const word_valus = word.split('')
    const revers_word = word_valus.reverse()
    const reverseWord = revers_word.join('')

    if(word == reverseWord){
        console.log('la parola è palindroma')
    }
    else{
        console.log('la parola non è palindroma')
    }
} 


const word = prompt('inserisci una parola')

check_palindroma(word)

