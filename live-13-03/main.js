// chiedo un numero all'utente e stampiamo l'elemento che si trova nell aposizione indicata dall'utente all'interno dell'array.


// creo un array di elementi e lo salvo in una varaiabile
const movies = [
   'tenet',
   'black panther',
   'ace ventura',
   'transformers',
   'star wars'
];

// chiedo un numero all'utente e stampiamo
/* const number = prompt('inserisci un numero da 0 fino a ' + Number( movies.length -1));
console.log(number); */

const numberInputElement = document.getElementById('number');

//console.log(numberInputElement.value);

const btnElement = document.getElementById('submit');
const filmElement = document.getElementById('film');

btnElement.addEventListener('click', function() {
   
   //console.log(numberInputElement.value);

   const number = Number(numberInputElement.value);

   console.log(movies[number]);

   filmElement.innerHTML += `<p> ${movies[number]} </p>`;    
})  

// loggo il film con posizione data dall'utente
/* console.log(movies[number]);

console.log(movies.length -1); */