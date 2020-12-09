/* JS Snack 1
L'utente inserisce due numeri in successione tramite prompt.
Il software stampa il maggiore. */ 

/* let numero1 = Number(prompt("Inserisci il primo numero"));
let numero2 = Number(prompt("Inserisci il secondo numero"));

const myFunction = (number1, number2) => {
    if (numero1 > numero2) {
        return numero1;
    } else {        
        return numero2;
    }
}

console.log(myFunction(numero1, numero2)); */


/* JS Snack 2
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prma la parola più corta, poi quella più lunga */

/* let parola1 = (prompt("Inserisci la prima parola"));
let parola2 = (prompt("Inserisci la seconda parola"));  

const myFunction = (parola1, parola2) => {
    if (parola1.length > parola2.length) {
        return parola2 + " " + parola1;
    } else {
        return `${parola1} ${parola2}`;
    }
}

console.log(myFunction(parola1, parola2)); */

/* JS Snack 3
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/


/* const myFunction = (x) => {
    let somma = 0;

    for (let i = 0; i < x; i++) {
        numero = Number(prompt("Inserisci numero"));
        somma = somma + numero; 
    }
    return somma;
}

console.log(myFunction(5)); */

/* const mySecFunction = (x) => {
    
    let somma = 0;
    z = 0

    while (z < x) {
        numero = Number(prompt("Inserisci numero"));
        somma = somma + numero;
        z++ 
    }

    return somma;
}

console.log(mySecFunction(5)); */

/* JS Snack 4
In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */

/* const lista = ["Romina", "Raffaele", "Pio", "Andrea", "Fabio", "Antonio"];

let nome = prompt("Inserisci il tuo nome");

const myFunction = (nome) => {
    if (lista.includes(nome)) {
        return "Puoi partecipare alla festa";
    } else {
        return "Non puoi partecipare alla festa";
    }
}

console.log(myFunction(nome)); */

/* JS Snack 5
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array. */

/* let voidArray = [];

const myFunction = () => {
    for (let i = 0; i < 6; i++) {
        userNumber  = Number(prompt("Inserisci un numero"));
        if (userNumber % 2 !== 0) {
            voidArray.push(userNumber);
        } 
    }
    return (voidArray);
}

console.log(myFunction()); */


/* JS Snack 6
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente. */


/* let n = Number(prompt("Inserisci il numero per generare i cubi"));

const myFunction = (n) => {
    let i = 0;
    while (i <= n) {
        // var cubo = i ** 3;
        let cubo = Math.pow(i, 3)  // --> 3 è il numero di volte che eleviamo a potenza, n è la base della potenza che ci serve
        console.log(cubo);
        i++;
    }
}

myFunction(n); */

/* JS Snack 7
Stampa le potenze di 2 fino a 1000. */

const base = 2;
const esponente = 1000;
let i = 0;
let potenza;
let arrayPotenza = [];

const myFunction = () => {
    while (i <= esponente) {
        potenza = base ** i;
        arrayPotenza.push(potenza);
        i++
    }
    return potenza;
}

myFunction();
console.log(arrayPotenza);
