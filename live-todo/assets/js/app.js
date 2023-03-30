/* 

M1:
Realizzare un applicazione per inserire delle tasks in una lista. 
La lista avrá delle task iniziali da stampare in pagina.

M2:
Tramite un input ed pulsante permettiamo all'utente di inserire una nuova task nella lista e vistualizzare la lista aggiornata.

M3:
L'utente non deve poter inserire una task vuota
Le task devono avere almento 3-5 caratteri

M4:
Se l'utente clicca sulla task (o su un pulsante nella task) la puo marcare come completa e rimuoverla dalla lista di task da completare.
Se l'utente ha completato tutte le task 😎 mostriamo un messaggio

Bonus:
Man mano che le task vengono completate le visualizziamo in una lista apparte

*/

const { createApp } = Vue

createApp({
   data() {
      return {
         tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS',
            'Learn PHP',
            
         ]
      }
   }
}).mount('#app');