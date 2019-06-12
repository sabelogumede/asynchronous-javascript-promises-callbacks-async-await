//Callback hell in JavaScript

/**
 * at the bottom the calc function is called three times
 * it should print each call result with one second delay....
 * but instead it waiths for 1 second and then print all at the same time...why?
 */


function calculateSquare(number, callback) {
    setTimeout(function () {
        //check number type
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

// //calculateSquare(number, callback);

// calculateSquare(1, function (error, result) {
//     //if there is an error returned
//     if (error !== null) {
//         console.log('Caught error: ' + String(error));
//         result;
//     }
//     console.log(result);
// });

// calculateSquare('bad argument', function (error, result) {
//     //if there is an error returned
//     if (error !== null) {
//         console.log('Caught error: ' + String(error));
//         result;
//     }
//     console.log(result);
// });

// calculateSquare(3, function (error, result) {
//     //if there is an error returned
//     if (error !== null) {
//         console.log('Caught error: ' + String(error));
//         result;
//     }
//     console.log(result);
// });



//One solution would be to move the other function calls inside each other
// so they execute one after the other finishes.
// what you see below is a callback-hell, what if we had 20 numbers to print.
// indentation and reading would be hard. this is why we will later use "promises as a solution"
calculateSquare(1, function (error, result) {
    console.log(result);
    //2
    calculateSquare(2, function (error, result) {
        console.log(result);
        //3
        calculateSquare(3, function (error, result) {
            console.log(result);
        });
    });

});