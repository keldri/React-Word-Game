import React from 'react';
import PropTypes from 'prop-types';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'


Guess.propTypes = {
  /** The number of guessess passed from the GuessResults Component. */
  value: PropTypes.string,
  /** The correct word pulled determined by the sample() which passes in words from data.js This prop is passed from the Game Component. */
  answer: PropTypes.string
}



function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}


function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  
  return (
    <p className="guess">
         {range(5).map((num) => (
          <Cell 
            key={num} 
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined} 
          />
         ))}
    </p>
  );
}

export default Guess;