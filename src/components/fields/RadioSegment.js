import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './RadioSegment.css';

function RadioSegment(props) {
  const {
    checked,
    children,
    className,
    name,
    onChange,
  } = props;
  return (
    <label
      htmlFor={name}
      className={cx('radio-segment', {
        'radio-segment--checked': checked,
      }, className)}
    >
      <input
        id={name}
        name={name}
        value={name}
        type="radio"
        className="radio-segment__input"
        onChange={onChange}
      />
      {children}
    </label>
  );
}

RadioSegment.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

RadioSegment.defaultProps = {
  checked: false,
  className: '',
  onChange: () => {},
};

export default RadioSegment;
