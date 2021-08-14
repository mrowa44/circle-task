import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function TextArea(props) {
  const {
    label,
    name,
    placeholder,
  } = props;
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-500 mb-3 mt-10"
      >
        {label}
      </label>
      <textarea
        {...register(name)}
        id={name}
        name={name}
        placeholder={placeholder}
        className="py-4 px-5 sm:text-sm w-full h-40 rounded-md border border-gray-200 focus:outline-none focus:border-indigo-500 mb-8"
      />
    </>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
