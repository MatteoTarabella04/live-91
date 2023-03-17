/* 
Live Coding Minutella Grid dinamica:
Creare in JavaScript una griglia 8x8.
Ogni volta che clicco su un quadrato questo si colora di verde
*/

/* 
Generare griglia con 64 celle 

.seleziono il nodo della DOM dove inserire le 64 celle
.ciclo 64 volte per generare le celle
.inserisco le celle nel markup

*/

const containerElement = document.querySelector('.container');

for (let i = 0; i < 110; i++) {
   const cellMarkup = `<div class="cell"></div>`;

   containerElement.insertAdjacentHTML('beforeend', cellMarkup);
}

const cellEL = document.querySelectorAll('.cell');

for (let i = 0; i < cellEL.length; i++) {

   const cell = cellEL[i];

   cell.addEventListener('click', function (e) {
      this.classList.toggle('bgGreen');
   });
}


