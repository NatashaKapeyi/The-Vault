//product

// date at the footer 
document.querySelector('#NewDate').textContent= new Date().getUTCFullYear()


let products =JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products',JSON.stringify([
    {
        "id":1,
        "name":"VANS1",
        "amount":799,
        "img":"https://i.postimg.cc/CKTh3f0n/427a2705f57c98e669b66a1c65ba4f01-removebg-preview.png",
    },
    {
        "id":1,
        "name":"VANS2",
        "amount":799,
        "img":"https://i.postimg.cc/CKTh3f0n/427a2705f57c98e669b66a1c65ba4f01-removebg-preview.png",
    },
    {
        "id":1,
        "name":"ANS1",
        "amount":799,
        "img":"https://i.postimg.cc/CKTh3f0n/427a2705f57c98e669b66a1c65ba4f01-removebg-preview.png",
    },
    {
        "id":1,
        "name":"VANS1",
        "amount":799,
        "img":"https://i.postimg.cc/CKTh3f0n/427a2705f57c98e669b66a1c65ba4f01-removebg-preview.png",
    },
   
]));

// displaying my products
let Dproducts = document.querySelector('[data-products]')

function displayProducts(){
    Dproducts.innerHTML=""
    if (products) {
        // looping through the products in my array
        products.forEach(product=>{
            //adding product to Dproducts
            Dproducts.innerHTML +=`<div class="card" style="width: 18rem;">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.amount}</p>
              <a href="#" class="btn btn-primary">ADD TO CART</a>
            </div>
          </div>
            `;
        });
    }
    //displaying spinner
    else{
        Dproducts.innerHTML=``
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
                    <a href="#" class="btn btn-dark d-flex justify-content-center">Add to Cart</a>
                </div>
            </div>
        `;
    });
} else {
    Dproducts.innerHTML = '<h2 class="text-center vh-100 my-5">No matching products found</h2>';
}
} catch (e) {
alert(e);
}
});




