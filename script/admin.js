//admin
let products = JSON.parse(localStorage.getItem('products')) || []
let adminWrapper = document.querySelector('[product-admin-table]')

function addProduct() {
    try{
        let product = {
            "id": products.map( item => item.id).at(-1) + 1 || 1,
            "name": document.querySelector('#'),
            "amount": document.querySelector('#'),
            "img": document.querySelector('#')
        }
        products.push(product)

    }catch(e) {

    }
    
}

document.querySelector('[product-modal-save]').addEventListener('click', addProduct)

function displayProducts(){
    adminWrapper.innerHTML=""
    if (products) {
        // looping through the products in my array
        products.forEach(product=>{
            //adding product to Dproducts
            adminWrapper.innerHTML +=`
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
            <button class="btn btn-dark mt-1">Del</button>
            </td>
            </tr>
            <tbody>
            </table>
            </div>
            `;
        });
    }
    //displaying spinner when loading  
    else{
        adminWrapper.innerHTML=`<div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">wait</span>
        </div>
      </div>`
    }
}
// calling the function
displayProducts();