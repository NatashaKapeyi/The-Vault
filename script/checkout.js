//checkout
// date at the footer for checkout
document.querySelector('#NewDate').textContent= new Date().getUTCFullYear()

//
let finalSelection = document.querySelector('[data-product-cart]')
let cData = JSON.parse(localStorage.getItem('basket'))

function displaycData() {
    finalSelection.innerHTML = ""
    cData.map(product=>{
        finalSelection.innerHTML += `
         <div class= table-responsive>
        <table class="table table-borderles table-sm table-align-middle">
  
        <tbody>
        <tr>
        <th scope="">${product.id}</th>
        <td><img src="${product.img}" class="w-25 img-fluid" alt=""</td>
        <td class="text-black">${product.name}</td>
        <td class="text-black">R${product.amount}</td>
        </tr>
        <tbody>
        </table>
        </div>
        `
    })
}
displaycData()
