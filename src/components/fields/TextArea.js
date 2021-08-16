import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import './TextArea.css';

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
        className="text-area__label"
      >
        {label}
      </label>
      <textarea
        {...register(name)}
        id={name}
        name={name}
        placeholder={placeholder}
        className="text-area__input"
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
