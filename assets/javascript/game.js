// Set target number randomly from 19 - 120
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// show target number to its own div
$("#number-to-reach").append(targetNumber);

// set initial user score to 0
var profit = 0;
// show profit to its own div
$("#profit").append(profit);


// // set value to each item
var randomPrice = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randomPrice2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randomPrice3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randomPrice4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var itemPrice = [randomPrice, randomPrice2, randomPrice3, randomPrice4];

for (let i = 0; i < itemPrice.length; i++){
    
    // make image for itemOne
    var itemOne = $("<img>");
    // add class for each item
    itemOne.addClass("item-image");
    // add image attribute on the item
    // template literals was used here
    itemOne.attr("src", `./assets/images/${i}.png`);
    // add random item value
    itemOne.attr("data-itemvalue", itemPrice[i]);
    // print image with its random value on screen
    $(`#gun${i+1}`).html(itemOne);
    console.log(`random price ${i+1}: ${itemPrice[i]}`)

}

var win = 0
$("#wins").append(win);
var loss = 0
$("#loss").append(loss);

// set on click event for each item
$(".item-image").on("click", function(){

    // create variable that has a value of the item price which is under the data-itemvalue attribute
    var itemValue = ($(this).attr("data-itemvalue"));

    // itemValue will return a string value, parseInt will convert this string value to integer
    itemValue = parseInt(itemValue);
   
    // add itemValue to profit everyclick
    // can also be typed as profit += itemValue
    profit = profit + itemValue

    // update profit on screen for every click
    $("#profit").text(profit);

    // if statement for win/lose
    // create a win/lose count variable and show on screen


    if (profit === targetNumber){
        alert("You Win!");
        win++;
        $("#wins").html(win);
    }
    else if (profit >= targetNumber){
        alert("You Lose!"); 
        loss++;
        $("#loss").html(loss);
        
    }
  
})
