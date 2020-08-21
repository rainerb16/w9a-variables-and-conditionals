// Uncomment to test script

// User is younger than 18 and not subscribed
// var userAge = 17;
// var is_subscribed = false;

// User is  18 and older and not subscribed
// var userAge = 21;
// var is_subscribed = false;

// User is younger than 18 and is subscribed
// var userAge = 17;
// var is_subscribed = true;

// User is 18 and older and is subscribed
var userAge = 21;
var is_subscribed = true;


if (userAge < 18 && !is_subscribed) {
     console.log("This user is younger than 18 and is not subscribed");
} else if (userAge >= 18 && !is_subscribed) {
     console.log("This user is 18 or older and is not subscribed");
} else if (userAge < 18 && is_subscribed) {
     console.log("This user is younger than 18 and is subscribed");
} else if (userAge >= 18 && is_subscribed) {
     console.log("This user is 18 and older and is subscribed");
} else {
     console.log("Oops! Something went wrong...");
}


// W9B: Simple User Array //

// Array of users
var userAges = [15, 17, 18, 20, 19, 23, 13];

// Loop iteration of user ages
for(var ageCounter = 0; ageCounter < userAges.length; ageCounter++) {
   console.log(userAges[ageCounter]);
}

// Array of subscription status
var is_subscribed = ["yes", "no", "yes", "no", "yes", "no", "yes"];

//Loop interation of subscription statuses
for(var subscriptionStatus = 0; subscriptionStatus < is_subscribed.length; subscriptionStatus++) {
    console.log(is_subscribed[subscriptionStatus]);
}


