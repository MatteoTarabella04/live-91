const mario_person = {
   name: '',
   lastname: '',
   mail: ''

};

const user = {
   name: '',
   lastname: '',
   mail: ''

};

const my_product = {
   name: '',
   image: '',
   description: ''

};

console.log(user);



const users = [
   {
      name: '',
      image: '',
      description: '',
      phone_number: ''
   },
   {
      name: '',
      image: '',
      description: '',
      phone_number: ''
   },
   {
      name: '',
      image: '',
      description: '',
      phone_number: ''
   },
   {
      name: '',
      image: '',
      description: '',
      phone_number: ''
   },
   {
      name: '',
      image: '',
      description: '',
      phone_number: ''
   }
];


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

class Person {

}

const pippo = new Person();

/* console.log(pippo);
console.log(mario_person); */



/* class Product {
   name = 'Vertical Mouse'
   description = 'lorem ipsum'
   in_stock = false
}

const ssd = new Product()
const monitor = new Product()

console.log(ssd);
console.log(monitor); */

/*  Magic function constructor */
class Product {
   //name = 'Vertical Mouse'
   //description = 'lorem ipsum'
   in_stock = false

   constructor(name, description, price, category, likes = 100) {
      this.name = name
      this.price = price
      this.category = category
      this.likes = likes
   }

}


const ssd = new Product('SSD 1TB', 'Super fast ssd drive', 60, 'Pc hardware', 120)
const monitor = new Product('AOC Monitor', 'Studio monitor', 149.99, 'Monitors / TV')

console.log(ssd);
console.log(monitor);