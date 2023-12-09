//admin
let products = JSON.parse(localStorage.getItem('products')) || []
let adminWrapper = document.querySelector('[product-admin-table]')

function displayProducts() {
  try {
    adminWrapper.innerHTML = ""
    if (products) {
      // looping through the products in my array
      products.forEach(product => {
        //adding product to Dproducts
        adminWrapper.innerHTML += `
            <div class= table-responsive>
            <table class="table table-borderless table-hover table-sm text-center ">
      
            <tbody>
            <tr>
            <th scope="row" class="w-25 text-start">${product.id}</th>
            <td class="w-25"><img src="${product.img}" class="w-50 justify-content-center img-fluid" alt=""</td>
            <td class="text-black w-25">${product.name}</td>
            <td class="text-black w-25">R${product.amount}</td>
            <td class="text-black w-25">
            <button class="btn btn-danger mt-1 text-black">Edit</button>
            <button class="btn btn-dark mt-1" onclick="deleteP(this)">Del</button>
            </td>
            </tr>
            <tbody>
            </table>
            </div>
            `;
      });
    }
    //displaying spinner when loading  
    else {
      adminWrapper.innerHTML = `<div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">wait</span>
        </div>
      </div>`
    }

  } catch (error) {

  }

}
// calling the function
displayProducts();

let save = document.querySelector('[product-modal-save]')
save.addEventListener('click', addProduct)

//adding new product , took me some time 
function addProduct() {
  try {
    let product = {
      "id": products.map(item => item.id).at(-1) || 1,
      "name": document.querySelector('#admin-name').value,
      "amount": document.querySelector('#admin-amount').value,
      "img": document.querySelector('#admin-image').value
    }
    products.push(product)
    localStorage.setItem('products',
      JSON.stringify(products))
    displayProducts()
  } catch (e) {

  }

}

//using attribute to sort
let sortB = document.querySelector("[product-admin-sort]");
sortB.addEventListener("click", sortProductsByPrice);

function sortProductsByPrice() {
  try {
    let sortProducts = products.sort((a, b) => {
      return parseInt(a.amount) - parseInt(b.amount);
    });
    displayProducts(sortProducts);

  } catch (error) {

  }

}

//used the methods from product page for search and sorting 

let searchProducts = document.querySelector('[product-admin-search ]')

searchProducts.addEventListener('keyup', () => {
  try {
    let Psearch = products.filter(prod => {
      return prod.name.toLowerCase().includes(searchProducts.value.toLowerCase());
    });

    if (Psearch.length > 0) {
      adminWrapper.innerHTML = "";
      Psearch.forEach(product => {
        adminWrapper.innerHTML += `<div class="card my-3 mx-3">
                <img src="${product.img}" class="card-img-top" style="height: 300px; object-fit: cover;"></img>
                <div class="card-body">
                    <h5 class="card-title text-center">${product.name}</h5>
                    <p class="card-text text-center">${product.amount}</p>
                    <a href="#" class="btn btn-dark d-flex justify-content-center" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</a>
                </div>
            </div>
        `;
      });
    } else {
      adminWrapper.innerHTML = '<h2 class="text-center vh-100 my-5">No products with that letter found</h2>';
    }
  } catch (e) {
    alert(e);
  }
});

//deleting button

function deleteP(item){ 
  try {
   
  let index =products.findIndex(a => {
      return a.id ==item.id
    });
    products.splice(index , 1)
    displayProducts()
  localStorage.setItem('products', JSON.stringify
    (products))

} catch (error) {
  
}
    
    
}