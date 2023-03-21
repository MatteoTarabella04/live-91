/* 
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/

// chiedo quanti secondi
const seconds = Number(prompt('Quanti secondi mancano alla cottura'));


setTimeout(() => {
   alert('scola la pastaaaa')
}, seconds * 1000)
