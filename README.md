# Word Game

## Joy of React, Project I

In this project from Josh Comeau's **Joy of React** course , I recreated the popular online word game, Wordle/

[Joy of React Course](https://courses.joshwcomeau.com/joy-of-react)
<br>
[Tutorial Repo](https://github.com/joy-of-react/word-clone)

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.

## Getting Started

This project is created with create-react-app and is intended to be run locally, on your computer, using Node.js and NPM.

<br>
<br>
<br>

# How the Game Works Behind the Scenes:
You can see more in the styleguideist

### The Game Component 
- Picks a random word from 'data.js' and uses `sample()` from utils.js to generate a random word on page load.
<br>
<br>
- The Game Component renders the GuessInput component
<br>
<br>

### The GuessInput Component
- Renders a form with a text input for the user to enter a 5 letter word. 
<br>
<br>
- When the user enters characters, this triggers the onChange event which declares a variable `nextGuess` and sets it's value to the user's input (uppercased). 
<br>
<br>
- The onChange event also updates the state of tentativeGuess to the value of `nextGuess`
<br>
<br>
- When the user presses enter, `handleSubmit()` is called. 

  <details>
    <summary>handleSubmit() </summary>
    <ul>
      <li> Prevents the form from being submitted.</li>
      <li> Instead, `handleSubmit()` calls `handleSubmitGuess()` and clears the input.</li>
      </ul>
  </details>
  <details>
    <summary>handleSubmitGuess()</summary>
    <ul>
        <li>is a function passed down from Game component via props</li>
        <li>It takes the value of the "guess" and adds it to `nextGuesses[]`</li> 
        <li>Then it updates the state of `guessess` to the value of `nextGuesses[]`.</li>
        <li>It then checks the user's guest to see if it matches the answer and updates the state of `gameStatus` to "won" or "lost".</li>
          <ul>
              <li>If `gameStatus` is "won" the WonBanner component is rendered with the `numOfGuesses` it took the user to win.</li>
              <li>If `gameStatus` is "lost" the LostBanner component is rendered with the true answer.</li>
          </ul>
      </ul>
  </details>
  <br>
### The GuessResults Component
- The GuessResults Component is passed the `guesses` and `answer` props from the Game Component.
<br>
<br>
- It maps through each guess (up to 6 guesses which is capped by `NUM_OF_GUESSES_ALLOWED` from constants.js ) and outputs a Guess Component for each guess. 
<br>
<br>
### The Guess Component
- The Guess Component compares the value of guess with the answer using the `CheckGuess()` provided by Gituhub from the `game-helpers.js`.
<br>
<br>
- Next, it renders a Cell Component for each of the guesses. It also renders cells for each try regardless if there's a value. 
<br>
<br>
### The Cell Component
 - The Cell Component takes in `letter` and `status` props from `game-helpers.js`to provide the status for each letter based on the result provided from checkGuess function.
 <br>
 <br>
 - A new variable is created for `className`. If a status exists, the value of  `className` is set to `cell` and `status`. Otherwise, the value is set to only `cell`. This is then used as the className value when the Cell Component returns a span for each cell with or without a letter. These classes determine whether or not the cell is green to indicate a correct letter and placement,  yellow to indicate correct letter but incorrect placement, or grey to indicate neither letter or placement are correct.  

