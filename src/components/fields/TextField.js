import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

function TextField(props) {
  const {
    control,
    label,
    name,
    placeholder,
    rules,
  } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });
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
          {...field}
          id={name}
          placeholder={placeholder}
          className="block w-full px-5 py-2.5 border-red-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
        />
      </div>
      <p className="mt-3 text-xs text-red-600">
        {error?.message}
      </p>
    </>
  );
}

TextField.propTypes = {
  control: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TextField.defaultProps = {
  rules: {},
};

export default TextField;
