//get info from local storage
total = localStorage.getItem("receipt_total");
firstname = localStorage.getItem("receipt_firstname");
lastname = localStorage.getItem("receipt_lastname");
email = localStorage.getItem("receipt_email");
phone = localStorage.getItem("receipt_phone");
address = localStorage.getItem("receipt_address");
mode = localStorage.getItem("receipt_MOP");

console.log(total, mode);

//place info on page
document.getElementById("name").innerHTML = firstname + " " + lastname;
document.getElementById("email").innerHTML = email;
document.getElementById("phone").innerHTML = phone;
document.getElementById("address").innerHTML = address;
document.getElementById("mode").innerHTML = mode;
document.getElementById("total").innerHTML = "$" + total;

//back to shop
document.getElementById("shopmore").onclick = function(){
    localStorage.clear();
}



