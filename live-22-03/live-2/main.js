

const films = [

   {
      title: 'Star Wars',
      duration: 130,
      year: 2000,
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7ozBHvOoDDi4UcBWbz3N7SGOKdm.jpg'
   },

   {
      title: 'The Equalizer',
      duration: 125,
      year: 2010,
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7xGr4gm4mu4J8BHyjEejfQCpwmJ.jpg'
   },

   {
      title: 'Space Jam',
      duration: 120,
      year: 1998,
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7Jd4M4vc6IvzL2sLDKkjWswF5rO.jpg'
   }
];

const containerEl = document.querySelector('.container')
console.log(films);

for (let i = 0; i < films.length; i++) {
   const thisMovie = films[i];
   console.log(thisMovie);
   const markupEl = `
   <div>
      <h2>${thisMovie.title}</h2>
      <img src="${thisMovie.img}">
   </div>`;

   containerEl.innerHTML += markupEl;
   
}

