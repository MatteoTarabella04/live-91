/*
classes

- class declaration
- class expression

*/

// declaration
// non posso richiamarla prima della dichiarazione
class ClassName {
   //codice
}
// posso usarla solo dopo la pdichiarazione

// class expression 
// non posso richiamarla prima della dichiarazione
const ClassName_2 = class {
   // codice
}
// posso usarla solo dopo la pdichiarazione

/*  Magic function constructor */
class Product {
   //name = 'Vertical Mouse'
   //description = 'lorem ipsum'
   in_stock = false

   /**
    * 
    * @param {String} name 
    * @param {String} description 
    * @param {Float} price 
    * @param {String} category 
    * @param {String} img_path 
    * @param {Number} likes 
    */
   constructor(name, description, price, category, img_path, likes = 100) {
      this.name = name
      this.description = description
      this.price = price
      this.category = category
      this.img_path = img_path
      this.likes = likes
   }

   addLikes() {
      this.likes++
   }

}

const Products = [
   new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
   new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
   new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
   new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
   new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
   new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp'),
]

console.log(Products);

/*  generate cards */
const prodElemenst = document.getElementById('products')

Products.forEach(prod => {
   const markup = `
   <div class="product">
      <div class="price">${prod.price}</div>
         <img src="${prod.img_path}" alt="${prod.name}">
         <h3>${prod.name}</h3>
         <p>${prod.description}</p>
         <button data-product-price="${prod.price}" data-product-name="${prod.name}">Buy Now</button>
   </div>
   `
   prodElemenst.insertAdjacentHTML('beforeend', markup)
})

const btnElements = document.querySelectorAll('.product button');

btnElements.forEach(btn => {
   btn.addEventListener('click', () => {
      console.log(btn);
   })
})



