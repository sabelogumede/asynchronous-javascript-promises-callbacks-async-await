//examples of using callbacks in populor libraries


//React

console.log(this.state.counter); //print 1
const newState = {
    counter: 2
};
setState(newState, callback);
console.log(this.state.counter); // still print 1


//Vanilla JavaScript

const button = document.querySelector('.button');
button.addEventListener('click', function (event) {
    alert('Button has been clicked!');
});

//JQuery

$('#coolthing').click(function () {
    alert("Handle for click event has been called.");
});

//mysql npm package

connection.query('SELECT 1 + 1 AS solution',
    function (error, result, fields) {
        if (error) throw error;
        console.log('The solution is: ', result[0].solution);
    }
);