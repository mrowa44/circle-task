import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import './TextField.css';

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
        className="text-field__label"
      >
        {label}
      </label>
      <div className="text-field__input-container">
        <input
          {...register(name, rules)}
          id={name}
          placeholder={error ? '' : placeholder}
          className={cx('text-field__input', {
            'text-field__input--error': error,
          })}
        />
      </div>
      <p className="text-field__error">
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
