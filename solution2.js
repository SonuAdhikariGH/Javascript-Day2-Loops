// Writing the snippet as usual and doing most;y the same thing as for loops but with a different tweak

let i = 2;
// Declared variable for storing value
while(i <= 20) {
    // We must declare the variable outside of while using "While loop"
    console.log(i)
    // Loging the result to console to debug
    i += 2;
    // Adiing += will store and increase the value so instead of using + only will give you an infinite loop
}