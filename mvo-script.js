var model = {
    names: [ 'spot', 'cranky', 'kittens', 'hans', 'stooges' ],
    clicks: [ 0, 0, 0, 0, 0 ]
};


var octopus = {
    animalList: document.getElementById('animalList'), // this is the <ul> element
    listClick: function() {
        this.animalList.addEventListener("click", function(event) {
            // assign the clicked target <a> element value to elementClicked
            var elementClicked = event.target;
            // loop through the array of names
            model.names.forEach( function(animalName) {
                // if the name matches the <a> element's id we return it and the click value?
                if (elementClicked.id === animalName) {
                    // get the array position of the names array item
                    arrayPosition = model.names.indexOf(animalName); // number between 0 and 4
                    // assign this value to a varible for modification of animalIncrementHeader text
                    newClickValue = model.clicks[arrayPosition];
                    values = [animalName, newClickValue];
                    return viewImage.render();
                }
            });
        });
    },
    animalImage: document.getElementById('animalImage'), // this is the <img> element
    imageClick: function() {
        this.animalImage.addEventListener("click", function(event) {
            // get the array position of the names array item matching image class name
            // then assign it to a variable to pass to the indexOf function
            var animalName = animalImage.className;
            arrayPosition = model.names.indexOf(animalName); // number between 0 and 4
            // increment the value of the clicks array item at that same position
            model.clicks[arrayPosition] += 1;
            // assign this value to a varible for modification of animalIncrementHeader text
            newClickValue = model.clicks[arrayPosition];

            // console.log(newClickValue);
            // console.log(animalName);
            values = [animalName, newClickValue];
            return viewImage.render();
        });
    },
    init: function() {
            viewList.init();
            this.imageClick();
            this.listClick();
    },
};


var viewList = {
    init: function() {
        viewList.render();
    },
    render: function() {
        // loop through the names and create <li>s and <a>s with animal name ids
        model.names.forEach( function(animalName) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.textContent = animalName;
            a.id = animalName;
            // a.href = "#";  // just a placeholder, do I need this? (makes the hover hand)
            li.appendChild(a);
            var animalList = document.getElementById('animalList'); // this is the <ul> element
            animalList.append(li);  // append <li>s, which includes the <a> children, to <ul>
        });
    }
};


var viewImage = {
    init: function() {
        viewImage.render();
    },
    render: function() {
        // render the correct image
        document.getElementById("animalImage").src=("images/" + values[0] + ".jpg");
        // also change the image element class name to the animalName value
        document.getElementById("animalImage").className = values[0];
        // and change the h1 below the image to show the name as well
        document.getElementById("animalName").textContent = values[0] +"!";
        // modify the h2 text to reflect the new values
        document.getElementById("animalIncrementHeader").textContent =
        "You have clicked " + values[0] + "'s image " + values[1] + " times.";
    }
}

octopus.init();