//Callback lack of readability

//Note: we us a publick API = https://dog.ceo/ to make our http request


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         console.log(xhr.responseText);
//     }
// }
// xhr.send(null);


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         //console.log(xhr.responseText);
//         const response = JSON.parse(xhr.responseText);
//         const breeds = Object.keys(response.message);
//         const firstBreedInTheList = breeds[0];
//         //print first breed
//         console.log(firstBreedInTheList);
//     }
// }
// xhr.send(null);


/**
 * The below code makes two httm request. image if we had to add more request to it. would the reading of the code me easy?
 *  I think not, so later we will simplfy the code by using promises to make it easyer to read.
 */

// Note this code makes two http request, one after the other
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        //console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        const breeds = Object.keys(response.message);
        const firstBreedInTheList = breeds[0];
        //create a new instance "xhr2"
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://dog.ceo/api/breed/' + firstBreedInTheList + '/images/random');
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === XMLHttpRequest.DONE) {
                console.log(xhr2.responseText);
            }
        }
        xhr2.send(null);
    }
}
xhr.send(null);