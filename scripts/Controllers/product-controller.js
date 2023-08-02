// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer

import productOperations from "../services/product-operations.js";

// Data Exchange B/w View and Model.
async function loadPizzas(){
    const pizza = await productOperations.loadProducts();
    console.log('Pizzas are ', pizza);
    const rowdiv= document.getElementById('loaddata');
    let pizzalen=pizza.length;
    for (let index=0;index<pizzalen;index++){
        const col=document.createElement('div');
        col.classList.add('col-4');
        col.innerHTML=`
        <div class="card" style="width: 18rem;">
                        <img src="${pizza[index].url}">
                        <div class="card-body">
                          <h5 class="card-title">${pizza[index].name}</h5>
                          <p class="card-text">${pizza[index].desc}</p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>`
        rowdiv.appendChild(col);
    }       
}
loadPizzas();