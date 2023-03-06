//CART

let cartIcon = document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let moveShop = document.querySelector(".shop");
let popUp = document.querySelector(".popUp");
let openPopUp = document.querySelector(".btn-buy");

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
};

//MAKING FUNCTION
function ready(){
    //REMOVE ITEMS IN CART

    var removeCartbuttons = document.getElementsByClassName("bxs-trash");
    console.log(removeCartbuttons);
    for (var i = 0; i < removeCartbuttons.length; i++) {
        var button = removeCartbuttons[i];
        button.addEventListener("click", removeCartItem)
    }
    // QUANTITY CHANGES
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }
    // ADD TO CART
    var addCart = document.getElementsByClassName("bx-shopping-bag");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //BUY BUTTON
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

//!!!!!!FIX ALERT!!!!!!

//BUY BUTTON
/*function buyButtonClicked(){
    alert('Your order is placed');
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}*/


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
    
}




/*=====================================================

POP-UP DUPLICATE CODE*/


//MAKING FUNCTION
function ready1(){
    //REMOVE ITEMS IN CART

    var removeCartbuttons = document.getElementsByClassName("bxs-trash");
    console.log(removeCartbuttons);
    for (var i = 0; i < removeCartbuttons.length; i++) {
        var button = removeCartbuttons[i];
        button.addEventListener("click", removeCartItem1)
    }
    // QUANTITY CHANGES
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged1);
    }
    // ADD TO CART
    var addCart = document.getElementsByClassName("bx-shopping-bag");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked1);
    }
    //BUY BUTTON
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

//remove items in cart
function removeCartItem1(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal1();
}

//QUANTITY CHANGES
function quantityChanged1(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal1();
}

//ADD TO CART
function addCartClicked1(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart1(title, price, productImg);
    updatetotal1();
}

function addProductToCart1(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems1 = document.getElementsByClassName("cart-content1")[0];
    var cartItemsNames1 = cartItems1.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames1.length; i++){
        if (cartItemsNames1[i].innerText == title){
            alert("You have already added this item to your Wander Cart!");
            return;
        }
    }

var cartBoxContent1 = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>    

                        <i class='bx bxs-trash'></i>`


cartShopBox.innerHTML = cartBoxContent1;
cartItems1.append(cartShopBox);
cartShopBox.getElementsByClassName("bxs-trash")[0].addEventListener("click", removeCartItem1);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged1);

}

//UPDATE TOTAL
function updatetotal1(){
    var cartContent1 = document.getElementsByClassName("cart-content1")[0];
    var cartBoxes1 = cartContent1.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes1.length; i++){
        var cartBox1 = cartBoxes1[i];
        var priceElement = cartBox1.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox1.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }

    //if price has cents
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price1")[0].innerText = "$" + total;
    
}

//!!!!!!FIX ALERT!!!!!!

//BUY BUTTON
/*function buyButtonClicked(){
    alert('Your order is placed');
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}*/


