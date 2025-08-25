// Print each element in an array:

let fruits = ["Apple", "Banana", "Cherry", "Mango"];
// This is an array that is a container of multiple data at one place

// To print each element of this array seperately we need to run a loop and the type is going to be for of (Specifically for arrays)

for(let fruit of fruits) {
    // We just need to declare the key inside the brackets and you can name key anything but experts prefer naming it to the singular version of the arrays name for more clarity in code
    console.log(fruit);
}