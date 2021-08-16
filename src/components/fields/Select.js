import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useFormContext } from 'react-hook-form';

import Icon from '../Icon';
import './Select.css';

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
    <label htmlFor={name} className="select">
      <select
        {...register(name)}
        id={name}
        name={name}
        defaultValue=""
        className={cx('select__dropdown', {
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
      <div className="select__icon-wrapper">
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
