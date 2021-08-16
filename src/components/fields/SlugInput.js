import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import './SlugInput.css';

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
        className="slug-input__label"
      >
        {label}
      </label>
      <div className="slug-input__wrapper">
        <span className="slug-input__base">
          {BASE_URL}
        </span>
        <input
          {...register(name)}
          type="text"
          id={name}
          className="slug-input__input"
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
