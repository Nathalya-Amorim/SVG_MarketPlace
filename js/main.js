// this is the module pattern 
// also called an IIFE
// in immediately Invoked Function Expression

(() => {
    //this is a JavaScript comment
    console.log('fired! javascript is working!');

    //  go find the elements on the page taht you want the user to interact with 

    // querySelector takes a CSS selector and uses that to find a match in the HTML file 

    // let theBadge = document.querySelector('#png'),
    //     theVector = document.querySelector('#vector');

    // theVector =document.querySelector('#vector');
    // query selector finds the first element that matches

    // querySelector finds ALL elements that match the selector
    // and returns back an array-like object called a node list 
    let theBadge = document.querySelectorAll('svg');

    function logMyId() {
        debugger; //pauses code execution at this line

        // log the element's ID to the console window
        console.log(this.id);
        // 'this' refers to the element that ypu're interacting with at the moment
    }

// figure out how you want the user to interact with the badge graphic - a click, mouseover, mouseout, double-click e etc
    // theBadge.addEventListener('click', logMyId);
    // theVector.addEventListener('click', logMyId);

    // for each badge in our collection, add an event handler 
    // arrow functions are just shorthand declarations 
    theBadge.forEach(badge => badge.addEventListener('click', logMyId));

}) (); 

