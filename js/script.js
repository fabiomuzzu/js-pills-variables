// Esercizio 1
// let number = 100;
// console.log(number);

// Esercizio 2
// const PI = 3.1416;
// console.log(PI);

// Esercizio 2/B
// ERRORE: PI = 3.14;
// console.log(PI);

// Esercizio 2/C
// let radius = 8;
// let circle = radius * 2 * PI;
// console.log(circle);

// Esercizio 3
// let name = "Carlo";
// name = "Marco";
// console.log(name);

// Esercizio 4
// let greet = "Ciao, Mondo!";
// console.log(greet);

// Esercizio 4/b
// greet = "Come stai, Mondo?";
// console.log(greet);

// Esercizio 4/c
// greet = greet + " " + "Come stai?"
// console.log(greet);


// Esercizio 5
// let num =  9;
// let num2 = 10;

// let comparison;

// if (num > num2){
//     comparison = num
// }
// else{
//     comparison = num2
// }

// console.log(comparison);

// let pippo = "ok";
// let pluto = "non";

// let comparison;

// if (pippo == pluto){
//     comparison = "Le stringe sono uguali";
// }
// else{
//     comparison = "Le stringhe sono diverse";
// }
// console.log(comparison);

// let pippo = 1;
// let comparison;

// if (pippo == '1'){
//     comparison = true;
// }
// else{
//     comparison = false;
// }
// console.log(comparison);


// Esempi di cicli for:
// for (let i=1; i<=42; i++){
//     console.log(i)
// }

// for (let i=42; i>=1; i--){
//     console.log(i)
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers);

// const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papaya'];
// console.log(fruits.length);

// const numOfElements = parseInt(prompt('Scrivi un numero intero'));
// console.log(typeof numOfElements);
// console.log(numOfElements);

// let numbers = [];
// let somma = 0;

// for(let i = 1; i <= numOfElements; i++){
//     numbers.push(i);
// }
// console.log(numbers);
// console.log(numbers.length);

// for(let i = 0; i < numOfElements; i++){
//     somma = somma+numbers[i];
// }
// console.log(somma)

// take input from the user
// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }

// function printHelloWorld(){
//     alert('Hello World');
// }

// printHelloWorld();

// function sommaNumeri(num1, num2){
//     let risultato = num1+num2;

//     return risultato;
// }

// let a = 2;
// let b = 3;

// let somma = sommaNumeri(a,b);

// console.log(somma);

// console.log(risultato);

// function getOneStringFromTwo(string1, string2){
//     return string1 + ' ' + string2;
// }

// console.log(getOneStringFromTwo('Cane','Bau'));

// setTimeout(function(){
//     alert('Ciao a tutti');
// }, 3000)

// let i = 0;
// setInterval(function(){
//     console.log(i++);
// }, 1000);

let persona = {
    "nome": "Mario",
    "cognome": "Musconi",
}

console.log(persona["nome"]);