
/*location of the ship*/
var location1 = 3;
var location2 = 4;
var location3 = 5;

/*user's guess*/
var guess;

/*hit and guess counter. both set at zero initially*/
var hits = 0;
var guesses = 0;

/*logic for whether ship is alive or not. set to false initially because ship will be alive at the beginning of game*/
var isSunk = false;

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


  