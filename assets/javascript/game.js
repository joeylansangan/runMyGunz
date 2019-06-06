// create start game button and show when page loads
var pressStart = "START GAME"
$("#startgame").append(pressStart);

// create in game menu button
var clickMenu = "Main Menu"
$(document).on("click", "#mainmenu", function(){
    hideElements();
    $("#startgame").show();
    $(".instructions").show();
})

// hide/show elements function
function hideElements(){
    $(".copstats").hide();
    $(".gunzback").hide();
    $(".mercs").hide();
}
function showElements(){
    $(".copstats").show();
    $(".gunzback").show();
    $(".mercs").show();
}


// hide elements when page loads
hideElements();

// create on click event that runs the whole game(rest of code)
$(document).on("click", "#startgame", function(){
    $("#mainmenu").html(clickMenu);
    $(".instructions").hide();
    $("#startgame").hide();
    $(".gunrow").show(); 
    showElements(); 
    gameStart();
    function displayPatrol(){
        var patrolImage = $("<img>")
        patrolImage.addClass("copphoto");  
        patrolImage.attr("src", `./assets/images/coppatrol.gif`);  
        $(`.copphoto`).html(patrolImage);
    }
    displayPatrol();    
})

// create gameStart function
function gameStart(){

    // Set target number randomly from 19 - 120
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// set initial user score to 0
var profit = 0;

// show target number to its own div
$("#number-to-reach").html(targetNumber);

// show profit to its own div
$("#profit").html(profit);

// create win/loss counter and show initial value on screen
var win = 0
$("#wins").html(win);
var loss = 0
$("#loss").html(loss); 

// background music
// './assets/audio/suspensepixel.wav'

// // set value to each item
var randomPrice = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randomPrice2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randomPrice3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randomPrice4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var itemPrice = [randomPrice, randomPrice2, randomPrice3, randomPrice4];
console.log(itemPrice);

var itemValue;

// create function that will display guns on screen
// this makes these buttons dynamic?
function displayGuns() {

for (let i = 0; i < itemPrice.length; i++){
    
    // make image for itemOne
    var itemOne = $("<img>");
    // add class for each item
    itemOne.addClass("item-image");
    // add image attribute on the item
    // template literals was used here to minimize code
    itemOne.attr("src", `./assets/images/${i}.png`);
    // add random item value
    itemOne.attr("data-itemvalue", itemPrice[i]);
    // print image with its random value on screen
    $(`#gun${i+1}`).html(itemOne);
    console.log(`random price ${i+1}: ${itemPrice[i]}`)

}
}

// create function that resets the stats
function resetStats(){
    // reset targetNumber
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // display new targetNumber
    $("#number-to-reach").html(targetNumber);

    // reset and show profit
    profit = 0
    $("#profit").html(profit);

    // get 4 new values for each gun
    randomPrice = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    randomPrice2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    randomPrice3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    randomPrice4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    itemPrice = [randomPrice, randomPrice2, randomPrice3, randomPrice4];

    displayGuns();
    console.log(itemPrice);

}
// call function to display guns
displayGuns();

// set on click event for each item
// dynamic button clicking syntax is used here
$(document).on("click", ".item-image", function(){
    // sound effect
    $('audio#money')[0].play();
    // create variable that has a value of the item price which is under the data-itemvalue attribute
    itemValue = ($(this).attr("data-itemvalue"));

    // itemValue will return a string value, parseInt will convert this string value to integer
    itemValue = parseInt(itemValue);
   
    // add itemValue to profit everyclick
    // can also be typed as profit += itemValue
    profit = profit + itemValue

    // update profit on screen for every click
    $("#profit").text(profit);

    // if statement for win/lose
    if (profit === targetNumber){
        alert("You Win!");
        win++;
        $("#wins").html(win);
        resetStats();
    }
    else if (profit >= targetNumber){
        alert("You Lose!"); 
        loss++;
        $("#loss").html(loss);
        resetStats();
        function displayBust(){
            var bustedImage = $("<img>")
            bustedImage.addClass("copphoto");  
            bustedImage.attr("src", `./assets/images/copcar.gif`);  
            $(`.copphoto`).html(bustedImage);
        }
        displayBust();
        $(".gunrow").hide();
    }
  
})

}




