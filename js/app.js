// Uncomment to test script

// User is younger than 18 and not subscribed
var userAge = 17;
var is_subscribed = false;

// User is  18 and older and not subscribed
// var userAge = 21;
// var is_subscribed = false;

// User is younger than 18 and is subscribed
// var userAge = 17;
// var is_subscribed = true;

// User is 18 and older and is subscribed
// var userAge = 21;
// var is_subscribed = true;


if (userAge < 18 && !is_subscribed) {
    console.log("This user is younger than 18 and is not subscribed");
} else if (userAge >= 18 && !is_subscribed) {
    console.log("This user is 18 or older and is not subscribed");
} else if (userAge < 18 && is_subscribed == true) {
    console.log("This user is younger than 18 and is subscribed");
} else if (userAge >= 18 && is_subscribed == true) {
    console.log("This user is 18 and older and is subscribed");
} else {
    console.log("Oops! Something went wrong...");
}