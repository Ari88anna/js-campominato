// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.





//Generare 16 numeri "bomba" random (non duplicati) tra 1 e 100 e metterli in un array vuoto
// mi servirà un ciclo while per generare 16 numeri random non duplicati

var arrayBombNumber = [];


while ( arrayBombNumber.length < 16 ) {
    var randomNum = getRandomNum(1, 100);

    if( arrayBombNumber.includes(randomNum) == false) {
        arrayBombNumber.push(randomNum)
    }
    
}
console.log(arrayBombNumber)    

// creo variabile array vuoto dove pushare i numeri corretti
var arrayUserAttempt = [];

// creo variabile flag che mi dice se la bomba non è stata trovata
var userNum = 0;
// chiedere all'utente di inserire un numero (non duplicato) tra 1 e 100 per 84 volte con ciclo while
        // il ciclo while deve andare avanti fino a che il numero non è un numero "bomba" e fino ad 84 volte

                // se il numero inserito è arrayBombNumber.includes --true
                // altrimenti se  -- push nell'array dell'utente
while ( (arrayBombNumber.includes(userNum) == false ) && ( arrayUserAttempt.length < 3 )) {

    userNum = parseInt(prompt('dimmi un numero'));
    
    if ( arrayBombNumber.includes(userNum)) {  
        
        alert('hai preso una bomba!')        

    } else if ( arrayUserAttempt.includes(userNum) == false) {

        arrayUserAttempt.push(userNum);

    } else if ( arrayUserAttempt.includes(userNum) == true ) {

        userNum = alert('per favore inserisci numeri diversi');    
    }
    
}

console.log(arrayUserAttempt)


// stampo all'utente la length dei numeri corretti
 document.getElementById('count').innerHTML = arrayUserAttempt.length




//FUNZIONI

// funzione per generare un numero random
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }