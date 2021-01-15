// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here
var image_list = [{p1:"images/sequence.png", p2:"images/correct_continuation.png", p3:"images/incorrect_continuation.png", answer:"left"},
{p1:"images/iteration_sequence.png", p2:"images/incorrect_iteration_continuation.png", p3:"images/correct_iteration_continuation.png", answer:"right"}
];

var continuation_list = [{p1:"images/Tri_images/arrow_0.png" , p2:"images/Tri_images/arrow_1.png" , p3:"images/Tri_images/arrow_2.png" ,p4:"images/Tri_images/arrow_3.png" , p5:"images/Tri_images/circle_3.png", answer:"left"},
{p1:"images/Tri_images/circle_0.png" , p2:"images/Tri_images/circle_1.png" , p3:"images/Tri_images/circle_3.png" ,p4:"images/Tri_images/square_4.png" , p5:"images/Tri_images/circle_4.png", answer:"right"},
{p1:"images/Tri_images/square_0.png" , p2:"images/Tri_images/square_1.png" , p3:"images/Tri_images/square_3.png" ,p4:"images/Tri_images/square_4.png" , p5:"images/Tri_images/triangle_4.png", answer:"left"},
];

continuation_list = shuffle(continuation_list);

//{p1:"images/", p2:"images/", p3:"images/", answer:""}

// get individual ID for each participant
var participantID = getRandomInt(999999);
/* Helper functions
*
*
*/

// funtion to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/*
function getTime() {
	var curr_Time = 0;
	curr_Time = performance.now();
	return curr_Time;
} */

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
