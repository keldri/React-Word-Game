import React from 'react';
import PropTypes from 'prop-types';

GuessInput.propTypes = {
    /** A function passed down from Game Component via props that
     * takes the value of the "guess" and adds it to `nextGuesses[]`,
     * updates the state of `guessess` to the value of `nextGuesses[]`,
     * checks the user's guest to see if it matches the answer and updates the state of `gameStatus` to "won" or "lost" and renders a banner (WonBanner component or LostBanner component) based on the status.
     */
  handleSubmitGuess: PropTypes.func,
   /** The value of the state of `gameStatus` whose default state is "running", and is either set to "won" or "lost" depending on the result of `HandleSubmitGuess()`  */
  gameStatus: PropTypes.string
}

function GuessInput({ handleSubmitGuess,gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>
          Enter Guess
      </label>
      <input 
        required
        disabled={gameStatus !== 'running'}
        type="text"
        id="guess-input"
        placeholder ="Enter a Guess"
        value={tentativeGuess}
        pattern="[a-zA-Z]{5}"
        title="5 Letter Word"
        onChange= {(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess)
        }}
      />
    </form>
  );
}

export default GuessInput;
