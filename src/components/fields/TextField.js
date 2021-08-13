import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

function TextField(props) {
  const {
    label,
    name,
    placeholder,
    rules,
    register,
    error,
  } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-500 mb-3"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm w-full">
        <input
          {...register(name, rules)}
          id={name}
          placeholder={error ? '' : placeholder}
          className={cx('block w-full px-5 py-2.5 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none sm:text-sm rounded-md', {
            'bg-red-50': error,
            'border-red-600': error,
            'focus:border-indigo-500': !error,
          })}
        />
      </div>
      <p className="mt-3 text-xs text-red-600">
        {error?.message}
      </p>
    </>
  );
}

TextField.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  rules: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TextField.defaultProps = {
  error: null,
  rules: {},
};

export default TextField;
