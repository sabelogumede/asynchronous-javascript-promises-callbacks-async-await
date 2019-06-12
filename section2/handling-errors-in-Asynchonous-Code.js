//How to handle errors in Asynchonous Code.
//note! JS promises handles errors differently...more on this later in the cause

function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

//Our calc function takes in two values, "argument & callback function"
calculateSquare(2, function (error, result) {
    if (error !== null) {
        console.log('Caught error: ' + String(error));
        result;
    }
    console.log(result);
});


// NOTE!! we can't use try-catch when we are woring with an ansynchonous function

// try {
//     calculateSquare('bad argument', function (result) {
//         console.log(result);
//     });
// } catch (error) {
//     console.log('Caught error: ' + String(error));
// }