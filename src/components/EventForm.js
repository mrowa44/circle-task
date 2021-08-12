import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import PrimaryBtn from './buttons/PrimaryBtn';

function EventForm(props) {
  const { onSubmit, submitLabel } = props;
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
      <input {...register('name', { required: true })} />
      {errors.name && <span>Event name is required</span>}
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
