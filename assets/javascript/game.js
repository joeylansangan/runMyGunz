// Set target number randomly from 19 - 120
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// show target number to its own div
$("#number-to-reach").append(targetNumber);

// set initial user score to 0
var profit = 0;


// // set value to each item
var randomPrice = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var itemPrice = [randomPrice];
console.log(itemPrice);
for (let i = 0; i < itemPrice.length; i++){
    
    // make image for itemOne
    var itemOne = $("<img>");

    // add class for each item
    itemOne.addClass("item-image");

    // add image attribute on on the item
    itemOne.attr("src", "https://www.pixilart.com/images/art/6267c88fe2cd581.png?v=1501586294");
    // add random item value
    itemOne.attr("data-itemvalue", itemPrice[i]);

    // print image with its random value on screen
    $("#guns").append(itemOne);
    
}

// show items to its own div
// set on click event for each item

// add score depending on the value of item clicked
// add if statement for win/lose

