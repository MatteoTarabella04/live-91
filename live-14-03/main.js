/* 
https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg
https://www.themoviedb.org/t/p/original/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg
https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg
https://www.themoviedb.org/t/p/original/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg
*/


// array con immagini 
const images = [
   'https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
   'https://www.themoviedb.org/t/p/original/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg',
   'https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg',
   'https://www.themoviedb.org/t/p/original/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg'
];


// select active images
let activeImage = 0;

// seleziono l'elemento dove verranno inserite le immagini
const imagesElement = document.querySelector('.slider > .images');

// ciclo aggiungi img
for (let i = 0; i < images.length; i++) {
   const imgSrc = images[i];
   const imgElement = `<img class= "img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt=="">`;
   console.log(imgElement);
   // insert adiacent
   imagesElement.insertAdjacentHTML('beforeend', imgElement);
   
}


// seleziono i bottoni
const nextEl = document.querySelector('.next');
nextEl.addEventListener('click', function() {
   console.log('clicked');

   // seleziono le slide
   const slideImagesElements = document.querySelectorAll('.slider > .images > img')
   
   // seleziono la slide attuale
   const currentSlide = slideImagesElements[activeImage];

   // rimuovo la classe active 
   currentSlide.classList.remove('active');
   
   // incremento la variabile dell'img active
   activeImage++

   //seleziono la prossima slide 
   const nextImage = slideImagesElements[activeImage];
   
   // applico la classe active
   nextImage.classList.add('active');
})

const prevEl = document.querySelector('.prev');
prevEl.addEventListener('click', function() {
   console.log('clicked');

   // seleziono le slide
   const slideImagesElements = document.querySelectorAll('.slider > .images > img')
   
   // seleziono la slide attuale
   const currentSlide = slideImagesElements[activeImage];

   // rimuovo la classe active 
   currentSlide.classList.remove('active');
   
   // incremento la variabile dell'img active
   activeImage--

   //seleziono la prossima slide 
   const prevImage = slideImagesElements[activeImage];
   
   // applico la classe active
   prevImage.classList.add('active');
   
})