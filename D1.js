/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string = ("String") //E' un datatype che si usa quando dobbiamo scrivere delle e parole o anche dei numeri (caratteri alfanumerici)
let number = 20 // E' un datatype che si usa quando dobbiamo scrivere dei numeri che poi ci servono per fare delle operazioni, tipo addizzioni, sottrazioni ecc.
let boolean = true // E' un datatype che si usa quando vogliamo che ci esca vero o falso. Ad esempio vogliamo sapere se Giovanni è nato a Gennaio, allora usiamo il datatype booleano
let nullo = null // E' un datatype che si usa quando bisogna dare un valore nullo, cioè nessun valore
let inde // variabile non ancora definita
console.log('esercizio 1', string, ' ' , number, ' ', boolean, ' ', nullo, ' ', inde)
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = ("Daniele")
console.log('esercizio 2',myName)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12
let num2 = 20
let sum = num1 + num2
console.log ('esercizio 3', sum)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log ('esercizio 4', x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = ("Frasca")
console.log('esercizio 5', myName)
const myName2 = ("test")
// myName2 = ("test2")
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4
let z = x - 4
console.log ('esercizio 6', z)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = ("john")
let name2 = ("John")
let result = (name1 === name2)
console.log('esercizio 7', result)
name1 = name1.toLowerCase()
name2 = name2.toLowerCase()
let extra = name1 === name2
console.log ('Extra', extra)

