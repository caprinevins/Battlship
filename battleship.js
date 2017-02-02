
/*location of the ship*/
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

/*user's guess*/
var guess;

/*hit and guess counter. both set at zero initially*/
var hits = 0;
var guesses = 0;

/*logic for whether ship is alive or not. set to false initially because ship will be alive at the beginning of game*/
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire again! (Enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Don't be a fool! Guess between 0-6!");
  } else {
    guesses = guesses + 1;
    
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      
      if (hits == 3) {
        isSunk = true;
        alert("You sank the Battleship!");
      }
    } else {
        alert("You missed!");
      }
    }
  }

var stats = "You took " + guesses + " guesses to sink the Battlship, " + "which means your shooting accuracy was " + (3 / guesses);

alert(stats);

/*pseudo code for the game:

LOOP while the ship is not sunk
  GET the user's guess
  COMPARE the user's input to valid input values
  IF the user's guess is invalid
    TELL user to enter a valid number
  ELSE
    ADD one to 'var guesses'
    IF the user's guess matches a location
      ADD one to 'var hits'
      IF number of hits is = 3
        SET 'var isSunk' to true
        TELL user "You sank my battleship!"
      END IF
    END IF
  END ELSE
END LOOP

TELL user Stats
*/


  