
var animals = {
    name: [ 'spot', 'cranky', 'kittens', 'animal4', 'animal5' ],
    clicks: [ 0, 0, 0, 0, 0 ],
};

animalList = document.getElementById('animalList'); // this is the ul

animals.name.forEach( function(animalName) {  // loop through the names and create <li>s
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = animalName;
    li.id = animalName;
    li.classList.add('animal');
    a.href = "#";
    li.appendChild(a);
    animalList.append(li);  // apppend the li, which includes the a child, to ul
});

////////////////////////////////

// var todosUl = document.querySelector('ul');

document.getElementById("spot").addEventListener("click", function(event) {
    // var elementClicked = event.target;
    // if (elementClicked.className === 'animal') {
    document.getElementById("animalImage").src="images/spot.jpg";

    // }
});



clicks = function (name, count) {
        // find out how many clicks an animal has
        // event listener to register a new click
        // increment the value of count to the new value and it somewhere?
    };
// var catClicks = 0
// catImage.addEventListener('click', function(){
//     // increment clicks variable
//     catClicks += 1;
//     // retrieve the h2 element with id incrementHeader
//     var catH1 = document.getElementById('catName');
//     var incrementHeader = document.getElementById('catIncrementHeader');
//     // console.log(incrementHeader);
//     // modify the text so that the value increments
//     catH1.textContent = ("Cat Clicker for " + catName);
//     incrementHeader.textContent = ("You have clicked on the Cat " + catClicks + " Times.");
// }, false);