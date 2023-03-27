import { Products } from "../db.js"

function printCards(domElement, products) {

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
      domElement.insertAdjacentHTML('beforeend', markup)
   })
}


function PrintCart(nodeList) {
   let sum = 0;
   nodeList.forEach(btn => {
      btn.addEventListener('click', function () {
         //console.log(btn);

         const productName = btn.getAttribute('data-product-name')
         const productPrice = btn.getAttribute('data-product-price');

         console.log(productName, productPrice);

         sum += parseFloat(productPrice);

         document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li>${productName} ${productPrice}</li>`)

         document.querySelector('.total').innerHTML = `<strong>Total: € ${sum.toFixed(2)}</strong>`
      })
   })
}

export { printCards, PrintCart }