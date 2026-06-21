// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);



// // Find the sum of numbers from 1 to 10
// let num = 1;
// let sum = 0;
// do {
//     sum += num;
//     num++;
// } while (num <= 10);
// console.log("sum of numbers from 1 to 10 is :", sum);


// Find the sum of all even numbers from 1 to 20 using a do-while loop.

let num = 1;
let sum = 0;

do {
    if (num % 2 == 0) {
        sum += num;
    }
    num++;
} while (num <= 20);

console.log("Sum of even numbers from 1 to 20 is:", sum);
