//checkout
// date at the footer for checkout
document.querySelector('#NewDate').textContent= new Date().getUTCFullYear()
let cart = JSON.parse(localStorage.getItem("basket"))
//

let finalSelection = document.querySelector('[data-product-cart]')
// let cData = JSON.parse(localStorage.getItem('basket'))
     let cData= Object.groupBy( cart, (product) => product.id)

      // amount due
      let amountD=0;  

function displaycData() {  try {finalSelection.innerHTML = "";
    if(cData)
    for( let key in cData){
        finalSelection.innerHTML += `
         <div class= table-responsive>
        <table class="table table-borderless table-hover table-sm text-center ">
  
        <tbody>
        <tr>
        <th scope="row" class="w-25 text-start">${cData[key][0].id}</th>
        <td class="w-25"><img src="${cData[key][0].img}" class="w-50 justify-content-center img-fluid" alt=""</td>
        <td class="text-black w-25">${cData[key][0].name}</td>
        <td class="text-black w-25">R${cData[key][0].amount}</td>
        <td class="text-black w-25">${cData[key].length}</td>
        </tr>
        <tbody>
        </table>
        </div>
        `
        amountD += +cData[key][0].amount * cData[key].length;
    }
    
    document.querySelector("[data-product-amount]").innerHTML = `Amount Due:${amountD}`
  
} catch (error) {
  
}
    
    
    
}
displaycData()


//amount due

// let sum = +cData.amount * cData.length
// document.querySelector('[data-product-amount]').textContent= sum;


// function amountDue(){
   
    

    
// };





//deleting
let deleteBtn= document.querySelector("[data-product-delete]")
deleteBtn.addEventListener("click",removeItem);


function removeItem(){ try {let remove = document.querySelector('[data-product-cart]');
  remove.remove();
  localStorage.removeItem("basket");

  
} catch (error) {
  
}
  
}

//pay btn
let confirmPay = document.querySelector('[data-product-pay]')
confirmPay.addEventListener('click', alertPay)

function alertPay(){ try {let message = "Click OK for a purchase/ Click No for cancelling purchase";
if (confirm(message) == true) {
  message= "";
} else {
  message= "You canceled your purchase😔 , try again😁";
}
document.querySelector('#pay').innerHTML = message;
  
} catch (error) {
  
}
  

}

  