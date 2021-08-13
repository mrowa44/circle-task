import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Select(props) {
  const {
    name,
    options,
    placeholder,
    register,
    watch,
  } = props;
  const value = watch(name);
  const isDefaultValue = !value;
  return (
    <select
      {...register(name)}
      id={name}
      name={name}
      defaultValue=""
      className={cx('py-2.5 px-5 rounded-md focus:border-indigo-500 border border-gray-200 focus:outline-none sm:text-sm w-full appearance-none', {
        'text-gray-400': isDefaultValue,
        'text-gray-600': !isDefaultValue,
      })}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};

export default Select;
