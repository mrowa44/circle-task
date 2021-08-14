import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';

import Icon from '../Icon';

function DateTimePicker(props) {
  const { placeholder, name } = props;
  const { control } = useFormContext();
  return (
    <div className="flex">
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
      <div className="relative">
        <div className="absolute z-10 w-7 right-0 mr-4 top-1/2 transform -translate-y-1/2">
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
