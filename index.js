// Semplice console log di "Hello Boolean"
console.log("Hello Boolean");

// Lettura di tutti argomenti da me passati con la riga di comando
console.log(process.argv);

// Lettura di un argomento specifico: in questo caso il terzo (equivalente al primo da me passato con la riga di comando da terminale)
console.log(process.argv[2]);

// Punto 5

// Assegno alla costante parolaPassata l'eventuale parametro passato con la riga di comando
let parolaPassata = process.argv[2];
// Se non esiste gli assegno un valore di default: "Non hai passato nessun argomento"
if (!parolaPassata) {
    parolaPassata = "non hai passato nessun argomento";
}
// Visualizzo tutto in console log
console.log(`Hello ${parolaPassata}`);
