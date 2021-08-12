import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

function RadioSegment(props) {
  const {
    children,
    name,
    checked,
    onChange,
  } = props;
  return (
    <label
      htmlFor={name}
      className={cx('border border-gray-200 py-6 px-4 bg-white rounded-lg w-44 flex flex-col items-center hover:bg-gray-50 cursor-pointer mr-5', {
        'border-indigo-500': checked,
      })}
    >
      <input
        id={name}
        name={name}
        value={name}
        type="radio"
        className="hidden"
        onChange={onChange}
      />
      {children}
    </label>
  );
}

RadioSegment.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

RadioSegment.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default RadioSegment;
