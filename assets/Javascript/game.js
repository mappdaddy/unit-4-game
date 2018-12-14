var targetNumber = 67;

$("#number-to-guess").text(targetNumber);

var counter = 0;

// 4 score options
var numberOptions = [7, 2, 19, 3];

// create images
for (var i = 0; i < numberOptions.length; i++) {
  
  var imageCrystal = $("<img>");

  imageCrystal.addClass("crystal-image");

  // linking crystal image
  imageCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbWWn0G1TEqSQ21FC5i07kaLn_QtfVhpBh91tgiDXrZbkCt_ZDw");

  //giving crystals numerical attributes
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

// giving all crystals the same properties
$(".crystal-image").on("click", function() {
 
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  
  // attach crystal to the global counter
  counter += crystalValue;
  
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});