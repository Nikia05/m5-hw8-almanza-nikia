// Create an Array of at least 3 losing messages

// Create variables to count wins and losses

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

// target all .box elements and attach a click event listener to each one using a loop

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

let win = 0;
let loss = 0;

let winMessage = "WINS: "+win
let lossMessage = "LOSSES: "+loss

const messageArray = ["SORRY, TRY AGAIN", "NEXT TIME", "WHOOPS"];

const boxes = document.querySelectorAll(".box");
for ( const box of boxes)
{
    box.addEventListener("click", ()=>
    {
        let message = event.target.textContent;
        let num = parseInt(message);
        var randomNumber = getRandomNumber(1, 3);
        var displayMessage = "";
        if(num == randomNumber)
        {
            displayMessage = "YOU WIN!";
            win++;
            winMessage = "WINS: "+win
        }
        else
        {
            var index = getRandomNumber(0, 2);
            displayMessage = messageArray[index];
            loss++;
            lossMessage = "LOSSES: "+loss 
        }
        document.getElementById("message").innerHTML = displayMessage;
        document.getElementById("wins").innerHTML = winMessage;
        document.getElementById("losses").innerHTML = lossMessage;

    });
}

function getRandomNumber(min, max)
{
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;

}