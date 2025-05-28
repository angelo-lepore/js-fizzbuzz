/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi ”Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi ”FizzBuzz”. */


// Programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Se i numeri sono sia multipli di 3 che di 5 stampiamo ”FizzBuzz”
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz");
    }
    // Se i numeri sono multipli di 3 stampiamo ”Fizz”
    else if (i % 3 === 0) {
        console.log ("Fizz");
    }
    // Se i numeri sono multipli di 5 stampiamo ”Buzz”
    else if (i % 5 === 0) {
        console.log ("Buzz");
    }
    // Altrimenti stampiamo il numero
    else {
        console.log (i);
    }
}
