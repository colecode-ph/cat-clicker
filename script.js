var animals = {
    names: [ 'spot', 'cranky', 'kittens', 'hans', 'stooges' ],
    clicks: [ 0, 0, 0, 0, 0 ]
}

animalList = document.getElementById('animalList'); // this is the <ul> (GLOBAL)

// loop through the names and create <li>s and <a>s with animal name ids
animals.names.forEach( function(animalName) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = animalName;
    a.id = animalName;
    a.href = "#";
    li.appendChild(a);
    animalList.append(li);  // append <li>s, which includes the <a> children, to <ul>
});

// add event listener to the <ul>
animalList.addEventListener("click", function(event) {
    // assign the clicked target <a> element value to elementClicked
    var elementClicked = event.target;
    // loop through the array of names
    animals.names.forEach( function(animalName) {
        // if the name matches the <a> element's id we change the image src
        if (elementClicked.id === animalName) {
            // images are named accordingly, ie spot's image is spot.jpg
            // also change the class name to the animalName value
            document.getElementById("animalImage").src=("images/" + animalName + ".jpg");
            document.getElementById("animalImage").className = animalName;
            document.getElementById("animalIncrementHeader").textContent =
                "You Have Clicked " + animalName + "'s image 0 times."
        }
    });
});

// animalImage = document.getElementById('animalImage'); // this is the <img> (GLOBAL)

// // add click event listener to the <img>
// animalImage.addEventListener("click", function(event) {
//      // loop through the array of names
//      names.forEach( function(animalName) {
//          // if the image class matches the animal name
//          if animalImage.classList.contains(animalName) {
//             // do stuff
//          }
//      });
//  });




// clicks = function (name, count) {
        // find out how many clicks an animal has
        // event listener to register a new click
        // increment the value of count to the new value and it somewhere?
  //  };
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