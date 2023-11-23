/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
  console.log(i);
}

/* questo è un ciclo for, dove partendo da un indice uguale a zero, venga incrementato il valore finché non sia minore di 5. l'errore in questo caso è che dopo l'[i] c'é il maggiore, mentre invece andrebbe il segno minore. */

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* questa è una funziona che controlla se il numero inserito è pari o dispari. in caso in cui sia pari aggiunge 5 al numero, altrimenti stampa solo il numero in console. il problema è che non c'é il console.log() e soprattutto non è presente l'operatore di identità */


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/* questa è una funzione che include un ciclo for, un errore è che al posto del punto e virgola presenta un punto e virgola. manca inoltre il console.log per invocare la funzione. */

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* questa funziona dovrebbe mostrare  solo i numeri pari. sono presenti alcuni errori di sintassi come il punto e virgola al punto 43, l'operatore di uguale alla riga 44. il return evenNumbers va messo fuori dal ciclo for e poi return evenNumbers.push(numbers[i]). poi devi mettere if (numbers[i] % 2 === 0);. si dovrebbe levare anche il ; per la condizione if. */