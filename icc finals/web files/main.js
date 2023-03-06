//variables that can be accessed for button purposes.

let cartIcon = document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let moveShop = document.querySelector(".shop");
let popUp = document.querySelector(".popUp");
let openPopUp = document.querySelector(".btn-buy");
let tempclose = document.querySelector(".bx-x");
let dimmer = document.querySelector(".dimmer");
let checkoutExit = document.querySelector(".bx-exit");
let cartIconRemove = document.querySelector("#cart-icon");
let showInvoice = document.querySelector(".invoice");
let backToShop = document.querySelector("#backToShop");


//OPEN CART
cartIcon.onclick = () =>{
    cart.classList.add("active");
    moveShop.classList.add("active");
};

//CLOSE CART
closeCart.onclick = () =>{
    cart.classList.remove("active");
    moveShop.classList.remove("active");
};

//CART WORKING JS
if(document.readyState== "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}

else{
    ready();
}

//CHECKOUT BUTTON POP-UP
openPopUp.onclick = () =>{
    popUp.classList.add("active");
    cart.classList.remove("active");
    moveShop.classList.remove("active");
    cart.classList.add("popUp");
    openPopUp.classList.add("popUp");
    //tempclose.classList.add("popUp");
    dimmer.classList.add("exit");
    cartIconRemove.classList.add("popUp");
}

//CLOSE BUTTON FOR POPUP
checkoutExit.onclick = () =>{
    dimmer.classList.remove("exit");
    popUp.classList.remove("active");
    cart.classList.remove("popUp");
    openPopUp.classList.remove("popUp");
    tempclose.classList.remove("popUp");
    cartIconRemove.classList.remove("popUp");
}

//PLACE ORDER
document.getElementById("sendbtn").onclick = function(){
    //declare values of personal details
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;

    //GET RADIO BUTTON VALUE FOR MODE OF PAYMENT
    var MOP = document.getElementsByName('payment');
    var paymentMode;
    for(i = 0; i < MOP.length; i++){
        if(MOP[i].checked) {
            console.log(MOP[i].value);
            paymentMode = MOP[i].value;
            break;
        }
    }
    //get total from updateTotal function
    var total = updatetotal();

    console.log(firstname, lastname, email, phone, address, paymentMode);
    
    //display contact info
    document.getElementById("invoiceTotal").innerHTML = "Total w/ ($10) Shipping Fee: $" + (total + 10);
    document.getElementById("orderName").innerHTML = "Name: " + firstname + " " + lastname;
    document.getElementById("orderEmail").innerHTML = "Email: " + email;
    document.getElementById("orderPhone").innerHTML = "Phone: " + phone;
    document.getElementById("orderAddress").innerHTML = "Address: " + address;
    document.getElementById("orderMOP").innerHTML = "Mode of Payment: " + paymentMode;

    //save to internal storage for receipt
    localStorage.setItem("receipt_total",total);
    localStorage.setItem("receipt_firstname",firstname);
    localStorage.setItem("receipt_lastname",lastname);
    localStorage.setItem("receipt_email",email);
    localStorage.setItem("receipt_phone",phone);
    localStorage.setItem("receipt_address",address);
    localStorage.setItem("receipt_MOP",paymentMode);


    popUp.classList.remove("active");
    showInvoice.classList.add("show");
    cart.classList.remove("popUp");
    cart.classList.add("invoice");
    cartIconRemove.classList.add("popUp");
    tempclose.classList.add("popUp");

    return false;
}


//BACK TO SHOP BUTTON
backToShop.onclick = () =>{
    dimmer.classList.remove("exit");
    showInvoice.classList.remove("show");
    cart.classList.remove("invoice");
    tempclose.classList.remove("popUp");
    cartIconRemove.classList.remove("popUp");
    openPopUp.classList.remove("popUp");

    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

//FUNCTIONALITIES FOR CART COMPUTATIONS
function ready(){
    //REMOVE ITEMS IN CART
    var removeCartbuttons = document.getElementsByClassName("bxs-trash");
    console.log(removeCartbuttons);
    for (var i = 0; i < removeCartbuttons.length; i++) {
        var button = removeCartbuttons[i];
        button.addEventListener("click", removeCartItem)
    }
    //CHANGE QUANTITY OF ITEMS
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }
    //ADD TO CART
    var addCart = document.getElementsByClassName("bx-shopping-bag");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}


//remove items in cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//QUANTITY CHANGES
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//ADD TO CART
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("You have already added this item to your Wander Cart!");
            return;
        }
    }

//Template literals to display the div for each cart details
var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>    

                        <i class='bx bxs-trash'></i>`


cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("bxs-trash")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);

}

//UPDATE TOTAL
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }

    //if price has cents
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
    return total;
}
