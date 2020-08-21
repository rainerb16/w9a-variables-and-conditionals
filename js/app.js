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
// var userAge = 21;
// var is_subscribed = true;


// if (userAge < 18 && !is_subscribed) {
//      console.log("This user is younger than 18 and is not subscribed");
// } else if (userAge >= 18 && !is_subscribed) {
//      console.log("This user is 18 or older and is not subscribed");
// } else if (userAge < 18 && is_subscribed) {
//      console.log("This user is younger than 18 and is subscribed");
// } else if (userAge >= 18 && is_subscribed) {
//      console.log("This user is 18 and older and is subscribed");
// } else {
//      console.log("Oops! Something went wrong...");
// }


// W9B: Simple User Array //

// Age and Subscription Arrays
var userAges = [15, 17, 18, 20, 14, 23, 13];
var is_subscribed = [true, false, true, false, true, false, true];

// Loop iteration of Ages
for(var counter = 0; counter < userAges.length; counter++) {
     console.log(userAges[counter]);

     if(userAges[counter] < 18 && is_subscribed[counter] != true) {
          console.log("User is under 18 and not subscribed");

     } else if (userAges[counter] >= 18 && is_subscribed[counter] != true) {
          console.log("This user is 18 or older and is not subscribed");

     } else if (userAges[counter] < 18 && is_subscribed[counter] == true) {
          console.log("This user is younger than 18 and is subscribed");

     } else if (userAges[counter] >= 18 && is_subscribed[counter] == true) {
          console.log("This user is 18 and older and is subscribed");

     } else {
          console.log("Oops! Something went wrong...");
          }    

}
