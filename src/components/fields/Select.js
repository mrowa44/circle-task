import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useFormContext } from 'react-hook-form';

import Icon from '../Icon';

function Select(props) {
  const {
    name,
    options,
    placeholder,
  } = props;
  const { register, watch } = useFormContext();
  const value = watch(name);
  const isDefaultValue = !value;
  return (
    <label htmlFor={name} className="relative">
      <select
        {...register(name)}
        id={name}
        name={name}
        defaultValue=""
        className={cx('py-2.5 px-5 rounded-md focus:border-indigo-500 border border-gray-200 focus:outline-none sm:text-sm w-full appearance-none bg-white', {
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
      <div className="absolute right-0 mr-4 top-1/2 transform -translate-y-1/2">
        <Icon type="chevron" />
      </div>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
