
export default class Product {
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


// opzione 1 name export
//export {Product}

//export {Product as ProductClass}

/*  opzione 2 default export */

//export {Product as default}