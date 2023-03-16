/* 
LIVE CODING ":
Lista di film + funzione che accetta come parametro un array che stampa in console tutti gli elementi
*/

const filmList = [
   'Creed',
   'Star Wars',
   'The Equalizer'
];


function printMovies(filmArray){
   
   for (let i = 0; i < filmArray.length; i++){
      const film = filmArray[i];
      console.log(film);
   }

}

printMovies(filmList);