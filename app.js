// Current list of guests
var guests = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
// Print the number of people being invited to dinner
console.log("You are inviting ".concat(guests.length, " people to dinner."));
// Print the original set of invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please come to dinner."));
});
// Inform about finding a bigger dinner table
console.log("Great news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
guests.unshift("NewGuest1");
// Add one new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "NewGuest2");
// Add one new guest to the end of the array using push()
guests.push("NewGuest3");
// Print a new set of invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please come to dinner."));
});
// Inform that only two people can be invited for dinner
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
// Print invitation messages to the remaining two people
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the final list to ensure it's empty
console.log("Final guest list:", guests);
