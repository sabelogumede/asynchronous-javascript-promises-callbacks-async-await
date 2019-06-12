function print1() {
    const number1 = 1;
    console.log(number1);
}

function print2() {
    function getNumber2() {
        return 2;
    }
    const number2 = getNumber2();
    console.log(number2);
}

function print3() {
    const callback = function (err, number3) {
        console.log(number3);
        //execute print4 func after print3 callback finishes
        print4();
    };
    const fs = require('fs');
    //reading from files is asynchronous in javaScript//
    fs.readFile('./number3.txt', 'utf-8', callback);
}

function print4() {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();
// print4();

//run file in the node cli to see results
// node print-4-numbers.js