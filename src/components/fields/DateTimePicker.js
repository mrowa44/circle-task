import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';

import Icon from '../Icon';
import './DateTimePicker.css';

function DateTimePicker(props) {
  const { placeholder, name } = props;
  const { control } = useFormContext();
  return (
    <div className="datetime-picker">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            showTimeSelect
            dateFormat="Pp"
            placeholderText={placeholder}
            className="datetime-picker__picker"
          />
        )}
      />
      <div className="datetime-picker__icon-container">
        <div className="datetime-picker__icon-wrapper">
          <Icon type="chevron" />
        </div>
      </div>
    </div>
  );
}

DateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default DateTimePicker;
