while (true) {
  var num = prompt("Pick a number", ""); 

  if (isNaN(num)) {
    alert("Error: Please enter a valid number.");
  } else {
    document.write("Your number is the square of " + (num * num));
    break; 
  }
}
document.write("<br><br>")



var noun_person = prompt('Enter a name of your choice for the story, and press enter:');
var noun_place = prompt('Enter a name of a place, and press enter:');
var adjective = prompt('Enter an adjective, and press enter:');
var noun_things_plural = prompt('Enter a noun in plural form, and press enter:');
var interjection = prompt('Enter an interjection (ex. ouch, oops, wow), and press enter:');
var preposition = prompt ( 'Enter a preposition and press enter:');
var conjunction = prompt('Enter a conjunction (ex. and, or, but), and press enter:')
var pronoun = prompt('Enter a pronoun and press enter:');
var verb = prompt('Enter a verb and press enter:');
var adverb = prompt('Enter an adverb (describe the action, usually ending in "ly" like "quickly"), and press enter:');

var madlibstory = "The realm of <span class='noun'>" + noun_place + "</span> was a happy place until the evil knight, Sir <span class='adjective'>" + adjective + "</span> <span class='noun'>" + noun_things_plural + "</span>, stole the king's prized horse. '<span class='interjection'>" + interjection + "</span>! That's <span class='pronoun'>" + pronoun + "</span>,' yelled the king as the evil knight fled. The king gathered all of his townspeople and announced, 'Someone stole my horse and I know I won't feel better <span class='conjunction'>" + conjunction + "</span> horses <span class='verb'>" + verb + "</span> <span class='adverb'>" + adverb + "</span>. Who dares to fight this knight?' The crowd was silent. Then a young child named <span class='noun'>" + noun_person + "</span> stepped forward and said, 'I will!'. The child left before dusk, and in the morning, everyone was surprised because the child returned safely while riding the king's prized horse. 'The child did it,' the town cheered. There was much rejoicing <span class='preposition'>" + preposition + "</span> the horses. The end."; //not my originalstory

var story = document.getElementById("story").innerHTML;console.log("story:" + story);

var storyData = {
  timestamp: Date.now (),
  story: story,
  noun_person: noun_person,
  noun_place: noun_place,
  adjective : adjective,
  noun_things_plural: noun_things_plural,
  var interjection = prompt('Enter an interjection (ex. ouch, oops, wow), and press enter:');
  var preposition = prompt ( 'Enter a preposition and press enter:');
  var conjunction = prompt('Enter a conjunction (ex. and, or, but), and press enter:')
  var pronoun = prompt('Enter a pronoun and press enter:');
  var verb = prompt('Enter a verb and press enter:');
  var adverb = prompt('Enter an adverb (describe the action, usually ending in "ly" like "quickly"), and press enter:');
  
};
document.write(madlibstory);



