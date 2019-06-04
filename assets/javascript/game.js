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

var itemPrice = [randomPrice];

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

// set on click event for each item
$(".item-image").on("click", function(){

    // create variable that has a value of the item price which is under the data-itemvalue attribute
    var itemValue = ($(this).attr("data-itemvalue"));

    // itemValue will return a string value, parseInt will convert this string value to integer
    itemValue = parseInt(itemValue);

    // add itemValue to profit everyclick
    // can also be typed as profit += itemValue
    // profit = profit + itemValue
    
})

// show items to its own div


// add score depending on the value of item clicked
// add if statement for win/lose

