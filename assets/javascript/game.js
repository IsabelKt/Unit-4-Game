var targetNumber = "";
targetNumber=Math.floor((Math.random()*150) +1);
$("#number-to-guess").text(targetNumber);

var counter = 0;

// These options (in the array) need to change everytime the game ends and need to be set to a random number between 0 and < or = to targetNumber.
var numberOptions = [4, 7, 0, 10];

var wins=0;
var loses=0;


for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");
//all imageCrystals are connected to the css file via addClass
  imageCrystal.addClass("crystal-image");
//individual src link to the crystal image, all images follow the same pattern
  imageCrystal.attr("src", "assets/images/aquagem.png");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);

 //Crystal 2
 var imageCrystal2 = $("<img>");
 imageCrystal2.addClass("crystal-image");
 imageCrystal2.attr("src", "assets/images/bluegem.png");
 imageCrystal2.attr("data-crystalvalue", numberOptions[i]);
 $("#crystals").append(imageCrystal2);

 // Crystal 3
 var imageCrystal3 = $("<img>");
 imageCrystal3.addClass("crystal-image");
 imageCrystal3.attr("src", "assets/images/pinkgem.png");
 imageCrystal3.attr("data-crystalvalue", numberOptions[i]);
 $("#crystals").append(imageCrystal3);


 // Crystal 4
 var imageCrystal4 = $("<img>");
 imageCrystal4.addClass("crystal-image");
 imageCrystal4.attr("src", "assets/images/purplegem.png");
 imageCrystal4.attr("data-crystalvalue", numberOptions[i]);
 $("#crystals").append(imageCrystal4);
}






// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    //alert("You soooo got this!");
    $("#wins").html("<b>You sooo got this!</b>")
  }

  else if (counter >= targetNumber) {
    //alert("Try again!");
    $("#loses").html("<b>Try again!</b>")
  }

});
