import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function TextField(props) {
  const { register, formState: { errors } } = useFormContext();
  const {
    label,
    name,
    placeholder,
    rules,
  } = props;
  const error = errors[name];
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
          className={cx('block w-full px-5 py-2.5 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none sm:text-sm rounded-md appearance-none', {
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TextField.defaultProps = {
  rules: {},
};

export default TextField;
