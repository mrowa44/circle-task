import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

function DateTimePicker(props) {
  const { placeholder, control, name } = props;
  return (
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
          className="py-2.5 px-5 rounded-md focus:border-indigo-500 border border-gray-200 focus:outline-none placeholder-gray-400 text-gray-600 sm:text-sm w-full"
        />
      )}
    />
  );
}

DateTimePicker.propTypes = {
  control: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default DateTimePicker;
