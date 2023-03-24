import React from 'react';
import PropTypes from 'prop-types';


Banner.propTypes = {
  /** The string "happy" or "sad" is passed via props from either the WonBanner Component or Lost Banner Component and then output in the banner component as a className for styling*/
  status: PropTypes.string,
  /** Markup & Information passed via props  from either the WonBanner Component or Lost Banner Component  */
  children: PropTypes.object
}

function Banner({ status, children }) {
  return (
    <div className={`${status} banner`}>{children}</div>
  );
}

export default Banner;
