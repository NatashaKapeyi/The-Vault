//checkout
// date at the footer for checkout
document.querySelector('#NewDate').textContent= new Date().getUTCFullYear()

//
let finalSelection = document.querySelector('[data-product-cart]')
let cData = JSON.parse(localStorage.getItem('basket'))

function displaycData() {
    finalSelection.innerHTML = ""
    cData.forEach(product=>{
        finalSelection.innerHTML += `
        <thead>
        <tbody>
        <tr>
        <th scope="row">1</th>
        <td class="text-white">${product.name}</td>
        <td><img src="${product.img}" class="w-25 img-fluid" alt="${product.name}"</td>
        <td class="text-white">R${product.amount}.00</td>
        </tr>
        </thead>
        `
    })
}
displaycData()
