import * as React from 'react';
import PropTypes from 'prop-types';

import cross from '../assets/cross.svg';
import open from '../assets/open_icon.svg';
import privateIcon from '../assets/private icon.svg';

const ICONS = {
  cross,
  open,
  private: privateIcon,
};

function Icon(props) {
  const { type, alt } = props;
  const src = ICONS[type];

  if (!src) {
    return null;
  }

  return <img src={ICONS[type]} alt={alt} />;
}

Icon.propTypes = {
  alt: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
};

Icon.defaultProps = {
  alt: 'icon',
};

export default Icon;
