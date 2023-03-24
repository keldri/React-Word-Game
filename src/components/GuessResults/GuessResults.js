import React from 'react';
import PropTypes from 'prop-types';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils';

import Guess from '../Guess/Guess';

GuessResults.propTypes = {
  /** The guesses state is passed from Game Component as a prop 
   * and is an array of all the users guesses */
  guesses: PropTypes.array,
  /** The correct word pulled determined by the sample() which passes in words from data.js This prop is passed from the Game Component. */
  answer: PropTypes.string
}

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess key={index} value={guesses[num]} answer={answer}/>
      ))}
    </div>
    );
}

export default GuessResults;