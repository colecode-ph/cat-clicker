var animals = {
    names: [ 'spot', 'cranky', 'kittens', 'hans', 'stooges' ],
    clicks: [ 0, 0, 0, 0, 0 ]
}

animalList = document.getElementById('animalList'); // this is the <ul> element (GLOBAL)

// loop through the names and create <li>s and <a>s with animal name ids
animals.names.forEach( function(animalName) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = animalName;
    a.id = animalName;
    a.href = "#";  // just a placeholder, do I need this?
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
            document.getElementById("animalImage").src=("images/" + animalName + ".jpg");
            // also change the image element class name to the animalName value
            document.getElementById("animalImage").className = animalName;
            // and change the h1 below the image to show the name as well
            document.getElementById("animalName").textContent = animalName +"!";
            // get the array position of the names array item
            arrayPosition = animals.names.indexOf(animalName); // number between 0 and 4
            // assign this value to a varible for modification of animalIncrementHeader text
            newClickValue = animals.clicks[arrayPosition];
            // modify the text to reflect the new values in h2 below image
            document.getElementById("animalIncrementHeader").textContent =
            "You have clicked " + animalName + "'s image " + newClickValue + " times.";
        }
    });
});

animalImage = document.getElementById('animalImage'); // this is the <img> element (GLOBAL)

// add click event listener to the <img>
animalImage.addEventListener("click", function(event) {
    // get the array position of the names array item matching image class name
    // then assign it to a variable to pass to the indexOf function
    var animalName = animalImage.className
    arrayPosition = animals.names.indexOf(animalName); // number between 0 and 4
    // increment the value of the clicks array item at that same position
    animals.clicks[arrayPosition] += 1;
    // assign this value to a varible for modification of animalIncrementHeader text
    newClickValue = animals.clicks[arrayPosition];
    // modify the text to reflect the new value
    document.getElementById("animalIncrementHeader").textContent =
        "You have clicked " + animalName + "'s image " + newClickValue + " times.";
 });
