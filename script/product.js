//product

// date at the footer 
document.querySelector('#NewDate').textContent= new Date().getUTCFullYear()


let products =JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products',JSON.stringify([
    {
        "id":1,
        "name":"VANS1",
        "amount":"3999",
        "img":"https://i.postimg.cc/SRW7G9mL/55a0d0209383b4ec0a79469004733bc7-removebg-preview.png",
    },
    {
        "id":1,
        "name":"slip",
        "amount":"899",
        "img":"https://i.postimg.cc/V6k3pYJb/393d79197d397f0f9e484bb0e4d2f398-removebg-preview.png",
    },
    {
        "id":1,
        "name":"pro",
        "amount":"699",
        "img":"https://i.postimg.cc/8Pgt0dQ9/9c66c96e3f2bcd210cc14a006510c4bb-removebg-preview.png",
    },
    {
        "id":1,
        "name":"skate",
        "amount":"999",
        "img":"https://i.postimg.cc/V6k3pYJb/393d79197d397f0f9e484bb0e4d2f398-removebg-preview.png",
    },
   
]));
let basket = [];
// displaying my products
let Dproducts = document.querySelector('[data-products]')

function displayProducts(){
    Dproducts.innerHTML=""
    if (products) {
        // looping through the products in my array
        products.forEach(product=>{
            //adding product to Dproducts
            Dproducts.innerHTML +=`<div class="card">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.amount}</p>
              <a class="btn btn-danger text-black id=CART" onclick='addToCart(${JSON.stringify(product)})'>ADD TO CART</a>
            </div>
          </div>
            `;
        });
    }
    //displaying spinner when loading  
    else{
        Dproducts.innerHTML=`<div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">wait</span>
        </div>
      </div>`
    }
}
// calling the function
displayProducts();

// searching
let searchProducts = document.querySelector('[data-search-product]')

searchProducts.addEventListener('keyup',() => { 
    try{
        let Psearch=products.filter(prod=> {
            return prod.name.toLowerCase().includes(searchProducts.value.toLowerCase());
        });
        
        if (Psearch.length > 0) {
            Dproducts.innerHTML ="";
            Psearch.forEach(product =>{
                Dproducts.innerHTML +=`<div class="card my-3 mx-3">
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
    Dproducts.innerHTML = '<h2 class="text-center vh-100 my-5">No with that letter products found</h2>';
}
} catch (e) {
alert(e);
}
});

//sorting 
 // Add event listener to the sort button
  let sButton = document.querySelector("[data-sort-product]");
  sButton.addEventListener("click", sortProductsByAmount);
   
function sortProductsByAmount() {
    let Sproducts = products.sort((a, b) => {
      return parseInt(a.amount) - parseInt(b.amount);
    });
    displayProducts(Sproducts);
  }
 
  //add to cart, targeting the id=CART in the cards 

  function addToCart(item) {
    // const chosenProduct = products.find((products) => products.id === productsid);
    // let basket = JSON.parse(localStorage.getItem("basket"));
    // if (!basket) {
    //   basket = [];
    // } // puts the product to the cart
    // basket.push(chosenProduct);
    // // Update in localStorage
    // localStorage.setItem("basket", JSON.stringify(basket));
    // alert("Product in the basket!");
    if(item) {
      basket.push(item)
      localStorage.setItem("basket", JSON.stringify(basket))
    }

  }  



