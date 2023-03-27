/*
classes

- class declaration
- class expression

*/

// declaration
// non posso richiamarla prima della dichiarazione
/* class ClassName {
   //codice
}
// posso usarla solo dopo la pdichiarazione

// class expression 
// non posso richiamarla prima della dichiarazione
const ClassName_2 = class {
   // codice
}
// posso usarla solo dopo la pdichiarazione
 */
/*  Magic function constructor */
/* TODO: import products.js */
import {Products} from "./db.js";
import { printCards, PrintCart } from "./Helpers/Functions.js";



/*  generate cards */
const prodElements = document.getElementById('products')

printCards(prodElements, Products);

const btnElements = document.querySelectorAll('.product button');

PrintCart(btnElements);


