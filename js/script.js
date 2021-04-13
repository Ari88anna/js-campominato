// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// 1. Generare bombe
// mi servirà un ciclo while (per generare 16 numeri random (da 1 a 100)) 
// il ciclo va avanti finchè il contenitore delle bombe non è popolato di 16 elementi

var arrayBombNumber = [];

var numeroMassimo = 5;
var numeroBombe = 2;

while ( arrayBombNumber.length < numeroBombe ) {

    var randomNum = getRandomNum(numeroMassimo);

    if( arrayBombNumber.includes(randomNum) == false) {
        arrayBombNumber.push(randomNum)
    }    
}
console.log(arrayBombNumber)    



// 2. Chiediamo i numero all'utente


// creo variabile array vuoto dove pushare i numeri corretti
var arrayUserAttempt = [];

// creo variabile flag che mi dice se la bomba è stata trovata
var bombaTrovata = false;
// chiedere all'utente di inserire un numero (non duplicato) tra 1 e 100 per 84 volte con ciclo while
// il ciclo while deve andare avanti fino a che il numero non è un numero "bomba" e fino ad 84 volte

                

while ( ( arrayUserAttempt.length < (numeroMassimo - numeroBombe) ) && ( bombaTrovata === false ) ) {

    var userNum = parseInt(prompt('dimmi un numero'));

    
    // se il numero inserito è una bomba: bombaTrovata diventa true
    
    // dopo aver controllato che non sia compreso tra quelli già inseriti.
        
    if ( arrayBombNumber.includes(userNum)) {  
        
        bombaTrovata = true;

    } else  {
        // altrimenti se il numero inserito non è una bomba -- push nell'array dell'utente,
        if( arrayUserAttempt.includes(userNum) == false ) {

            arrayUserAttempt.push(userNum);
        } else {
            alert ('questo numero è gia stato inserito, inseriscine un altro');
        }
        

    } 
    
}

console.log(arrayUserAttempt)



// 3. Stampiamo l'esito
var messaggio = 'hai vinto';

if (bombaTrovata) {

    messaggio = 'hai perso'

} 

alert (messaggio)

var totaleNumeriInseriti = arrayUserAttempt.length;
// stampo all'utente la length dei numeri corretti
 document.getElementById('count').innerHTML = totaleNumeriInseriti;



//FUNZIONI

// funzione per generare un numero random
function getRandomNum(max) {
    return Math.floor(Math.random() * (max)) + 1 ;
}


