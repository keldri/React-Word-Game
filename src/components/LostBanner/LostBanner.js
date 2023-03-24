import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../Banner/Banner';

LostBanner.propTypes = {
  /** The correct word pulled determined by the sample() which passes in words from data.js This prop is passed from the Game Component. */
  answer: PropTypes.string
}

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        <strong>Sorry,Charlie! You lose!</strong> The correct answer is <strong>{ answer }</strong>
      </p>
    </Banner>
  );
}

export default LostBanner;
