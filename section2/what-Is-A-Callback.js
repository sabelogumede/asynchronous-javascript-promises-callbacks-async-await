function print(number) {
    console.log(number);
}

const numbers = [1, 2, 3, 4];
//print function is passed as a variable inside forEach callback func
// forEach func is passed numbers and then passes each number into 'print func'
numbers.forEach(print);


//run code: node what-is-A-callback.js


// function f(callback) {
//     setTimeout(() => callback(), 0);

//     //callback();
// }

// f(() => console.log('This is a callback'));

// console.log('Hello world!');