/* 
LIVE CODING ":

scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/

const numb = Number(prompt('Inserisci un numero'));

function evenOdd(n) {

   if (n % 2 == 0) {
      // pari
      return true;
   }

   // dispari
   return false;

}


if (evenOdd(numb)) {
   console.log('Il numero è pari');
   
} else {
   console.log('Il numero è dispari');
}