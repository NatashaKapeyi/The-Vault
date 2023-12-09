//product

// date at the footer 
document.querySelector('#NewDate').textContent= new Date().getUTCFullYear()


let products =JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products',JSON.stringify([
    {
        "id":"1",
        "name":"CHECKERBOARD SKATE SLIP-ON",
        "amount":"999",
        "img":"https://i.postimg.cc/wTVDgf3V/421925-5088-529124-3-600x-removebg-preview-3.png",     
    },
    {
        "id":"2",
        "name":"CLASSIC SLIP-ON 98 DX SHOES",
        "amount":"1399",
        "img":"https://i.postimg.cc/52ygGdpv/431103-3920-301134-3-600x-removebg-preview-1.png",
    },
    {
        "id":"3",
        "name":"HARBOR MULE VR3",
        "amount":"1799",
        "img":"https://i.postimg.cc/2SFgxfcD/431877-1323-778134-2-600x-removebg-preview.png",
    },
    {
        "id":"4",
        "name":"CHECKERBOARD SK8-HI STACKED SHOES",
        "amount":"1399",
        "img":"https://i.postimg.cc/mgnvpS3L/429088-6676-880924-2-600x-removebg-preview-2.png",
    },
   
    {
        "id":"5",
        "name":"Vans Mega Check Knu Skool Skate Shoes",
        "amount":" 2322",
        "img":"https://i.postimg.cc/htqHxG0s/s-l1600-removebg-preview.png",
    },
   
]));

let basket = JSON.parse(localStorage.getItem("basket")) || [];


// displaying my products
let Dproducts = document.querySelector('[data-products]')

function displayProducts(){ try {Dproducts.innerHTML=""
    if (products) {
        // looping through the products in my array
        products.forEach(product=>{
            //adding product to Dproducts
            Dproducts.innerHTML +=`<div class="card">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">R${product.amount}</p>
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
    
} catch (error) {
    
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
    Dproducts.innerHTML = '<h2 class="text-center vh-100 my-5">No products with that letter found</h2>';
}
} catch (e) {
alert(e);
}
});

//sorting 
 // Add event listener to the sort button
  let sButton = document.querySelector("[data-sort-product]");
  sButton.addEventListener("click", sortProductsByAmount);
   
function sortProductsByAmount() { try { let Sproducts = products.sort((a, b) => {
      return parseInt(a.amount) - parseInt(b.amount);
    });
    displayProducts(Sproducts);
    
} catch (error) {
    
}
   
  }
 
  //add to cart, targeting the id=CART in the cards 

  function addToCart(item) {try {  if(item) {
      basket.push(item)
      localStorage.setItem("basket", JSON.stringify(basket))
    }
    
  } catch (error) {
    
  }
    // const chosenProduct = products.find((products) => products.id === productsid);
    // let basket = JSON.parse(localStorage.getItem("basket"));
    // if (!basket) {
    //   basket = [];
    // } // puts the product to the cart
    // basket.push(chosenProduct);
    // // Update in localStorage
    // localStorage.setItem("basket", JSON.stringify(basket));
    // alert("Product in the basket!");
  

  }  

  



