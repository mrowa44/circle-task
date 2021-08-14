import React from 'react';
import PropTypes from 'prop-types';

import cross from '../assets/cross.svg';
import open from '../assets/open_icon.svg';
import privateIcon from '../assets/private icon.svg';
import chevron from '../assets/chevron.svg';

const ICONS = {
  cross,
  open,
  private: privateIcon,
  chevron,
};

function Icon(props) {
  const { type, alt, className } = props;
  const src = ICONS[type];

  if (!src) {
    return null;
  }

  return <img src={ICONS[type]} alt={alt} className={className} />;
}

Icon.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  alt: 'icon',
  className: '',
};

export default Icon;
