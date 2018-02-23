var dogImage = document.getElementById('dogImage');
var dogName = "Spot"
var catImage = document.getElementById('catImage');
var catName = "Cranky"

var dogClicks = 0
dogImage.addEventListener('click', function(){
    // increment clicks variable
    dogClicks += 1;
    // retrieve the h2 element with id incrementHeader
    var dogH1 = document.getElementById('dogName');
    var incrementHeader = document.getElementById('dogIncrementHeader');
    // console.log(incrementHeader);
    // modify the text so that the value increments
    dogH1.textContent = ("Dog Clicker for " + dogName);
    incrementHeader.textContent = ("You have clicked on the Dog " + dogClicks + " Times.");
}, false);

var catClicks = 0
catImage.addEventListener('click', function(){
    // increment clicks variable
    catClicks += 1;
    // retrieve the h2 element with id incrementHeader
    var catH1 = document.getElementById('catName');
    var incrementHeader = document.getElementById('catIncrementHeader');
    // console.log(incrementHeader);
    // modify the text so that the value increments
    catH1.textContent = ("Cat Clicker for " + catName);
    incrementHeader.textContent = ("You have clicked on the Cat " + catClicks + " Times.");
}, false);