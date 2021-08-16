import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Icon, { ICONS } from '../Icon';
import './RadioSegment.css';

function RadioSegment(props) {
  const {
    checked,
    icon,
    name,
    onChange,
    spaced,
    text,
    title,
  } = props;
  return (
    <label
      htmlFor={name}
      className={cx('radio-segment', {
        'radio-segment--checked': checked,
        'radio-segment--spaced': spaced,
      })}
    >
      <input
        id={name}
        name={name}
        value={name}
        type="radio"
        className="radio-segment__input"
        onChange={onChange}
      />
      <Icon type={icon} />
      <div className="radio-segment__title">
        {title}
      </div>
      <div className="radio-segment__text">
        {text}
      </div>
    </label>
  );
}

RadioSegment.propTypes = {
  checked: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  spaced: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

RadioSegment.defaultProps = {
  checked: false,
  onChange: () => {},
  spaced: false,
};

export default RadioSegment;
