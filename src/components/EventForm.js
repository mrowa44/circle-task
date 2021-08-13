import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import PrimaryBtn from './buttons/PrimaryBtn';
import TextField from './fields/TextField';
import RadioSegment from './fields/RadioSegment';
import RadioGroup from './fields/RadioGroup';
import DateTimePicker from './fields/DateTimePicker';
import Select from './fields/Select';
import TextArea from './fields/TextArea';
import globeIcon from '../assets/open_icon.svg';
import privateIcon from '../assets/private icon.svg';

const DURATION_OPTIONS = ['1h', '2h', '3h', '4h', '5h'];

function EventForm(props) {
  const { onSubmit, submitLabel } = props;
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm({
    mode: 'onBlur',
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start pb-20">
      <TextField
        name="name"
        label="Event name"
        placeholder="Event name"
        register={register}
        rules={{
          required: { value: true, message: 'Event name is required' },
        }}
        error={errors.name}
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
      <div className="font-semibold text-xl mt-14 mb-5">
        When
      </div>
      <div className="block text-base font-medium text-gray-500 mb-3">
        Set date and time
      </div>
      <div className="flex w-full">
        <div className="flex-1 mr-5">
          <DateTimePicker
            placeholder="Date & time"
            name="datetime"
            control={control}
            className="mr-5"
          />
        </div>
        <div className="flex-1">
          <Select
            options={DURATION_OPTIONS}
            name="duration"
            placeholder="Duration"
            register={register}
            watch={watch}
          />
        </div>
      </div>
      <TextArea
        name="description"
        label="Description"
        placeholder="Write a summary about your event"
        register={register}
      />
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
