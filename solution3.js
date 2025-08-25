// Calculate the sum of numbers from 1 to 100 using a for loop.

// Decalring the varibale first but with a tweak this time

let count = 0;
// This variable will store the counts like 1+2+3+4; Think it as a container that will keep tracking all the additions that is being performed and appending to the upcoming numbers whatsoever

// And i must have a value too like 0 mostly

for(let i = 0; i <= 100; i++) {
    count += i;
    // This block of code will ensure the addition that i mentioned above, and must use += with it or else it wont work
}
console.log("The total:",count);
// Logged outside of the function just to get the final answer without actually seeing the whole thing taking place