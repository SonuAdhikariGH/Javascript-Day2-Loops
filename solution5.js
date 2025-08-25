// Loop through this object using for...in and print keys + values

let person = { name: "Sonu", age: 19, country: "India" };
// We'll have to use for in as mentioned in the question and well have to print both keys and values alltogether

for(let keys in person) {
    console.log(keys + ":", person[keys]);
    // Now the logic is simple as the keys will print the keys of object but the person[keys] will peint the data of the keys assigned
}