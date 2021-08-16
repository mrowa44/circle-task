import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const BASE_URL = 'yourdomain.com';

function SlugInput(props) {
  const {
    name,
    label,
    placeholder,
  } = props;
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-500 mb-3"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm mb-11 w-full">
        <span className="inline-flex items-center px-5 rounded-l-md border border-r-0 border-gray-200 bg-white text-gray-500 sm:text-sm">
          {BASE_URL}
        </span>
        <input
          {...register(name)}
          type="text"
          id={name}
          className="flex-1 min-w-0 block w-full px-5 py-2.5 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-200 border text-gray-600 focus:outline-none focus:border-indigo-500 appearance-none"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

SlugInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SlugInput;
