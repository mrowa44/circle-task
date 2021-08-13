import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import PrimaryBtn from './buttons/PrimaryBtn';
import TextField from './fields/TextField';
import RadioSegment from './fields/RadioSegment';
import RadioGroup from './fields/RadioGroup';
import globeIcon from '../assets/open_icon.svg';
import privateIcon from '../assets/private icon.svg';

function EventForm(props) {
  const { onSubmit, submitLabel } = props;
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
      <TextField
        name="name"
        label="Event name"
        placeholder="Event name"
        control={control}
        rules={{
          required: { value: true, message: 'Event name is required' },
        }}
      />
      <div className="font-semibold text-xl mt-14 mb-5">
        Where
      </div>
      <RadioGroup
        control={control}
        name="place"
        rules={{
          required: { value: true, message: 'Where is required' },
        }}
      >
        <RadioSegment name="virtual">
          <img src={globeIcon} alt="" />
          <div className="text-base text-center">Virtual</div>
          <div className="text-center text-xs text-gray-400">
            Nulla facilisi. Donec aliquam leo sed eros consectetur, vel
          </div>
        </RadioSegment>
        <RadioSegment name="in-person">
          <img src={privateIcon} alt="" />
          <div className="text-base text-center">In person</div>
          <div className="text-center text-xs text-gray-400">
            Nulla facilisi. Donec aliquam leo sed eros consectetur, vel
          </div>
        </RadioSegment>
      </RadioGroup>
      <PrimaryBtn type="submit">
        {submitLabel}
      </PrimaryBtn>
    </form>
  );
}

EventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
};

export default EventForm;
