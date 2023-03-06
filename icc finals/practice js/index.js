/*let username = window.prompt("What's your name?");
console.log(username);*/

/*document.getElementById("submit-btn").onclick = function(){
    bag = document.getElementById("bag").value;
    bag = Number(bag)*5;

    console.log(bag);

    heels = document.getElementById("heels").value;
    heels = Number(heels)*10;

    console.log(heels);

    horse = document.getElementById("horse").value;
    horse = Number(horse)*5;

    console.log(horse);

    total = bag + heels + horse;

    document.getElementById("total").innerHTML = "Total: " + total;
}


//BUTTON TEST SHOPPING CART
Bag (5 Php)
Heels (10 Php)
Horse (7 Php)*/



var buttonClicked = false;

window.addEventListener('load',function(){
  console.log(buttonClicked);
  document.getElementById('bag-btn').addEventListener('click',function(){
    buttonClicked = true;
    console.log(buttonClicked);
  });
});



