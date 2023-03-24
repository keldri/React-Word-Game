import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../Banner/Banner';

WonBanner.propTypes = {
  /** The Game Component passes the number of guesses to the WonBanner Component as a prop */
  numOfGuesses: PropTypes.number
}

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in {''}
        <strong>
          {numOfGuesses === 1
            ? '1 guess'
            : `${numOfGuesses} guesses`
          }
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
