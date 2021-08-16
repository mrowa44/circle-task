import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Form from './Form';
import Icon from './Icon';
import TextField from './fields/TextField';
import RadioSegment from './fields/RadioSegment';
import RadioGroup from './fields/RadioGroup';
import DateTimePicker from './fields/DateTimePicker';
import Select from './fields/Select';
import TextArea from './fields/TextArea';
import SlugInput from './fields/SlugInput';

const DURATION_OPTIONS = ['1h', '2h', '3h', '4h', '5h'];

function EventForm(props) {
  const {
    initialValues,
    onSubmit,
    submitLabel,
  } = props;

  return (
    <Form
      onSubmit={onSubmit}
      formProps={{ mode: 'onBlur' }}
      initialValues={initialValues}
    >
      <TextField
        name="name"
        label="Event name"
        placeholder="Event name"
        rules={{
          required: { value: true, message: 'Event name is required' },
        }}
      />
      <div className="font-semibold text-xl mt-9 mb-5 tracking-wide text-gray-800">
        Where
      </div>
      <RadioGroup
        name="place"
        rules={{
          required: { value: true, message: 'Where is required' },
        }}
      >
        <RadioSegment name="virtual" className="mr-2 sm:mr-5">
          <Icon type="open" />
          <div className="text-base text-center my-3 text-gray-800">Virtual</div>
          <div className="text-center text-xs text-gray-400">
            Nulla facilisi. Donec aliquam leo sed eros consectetur, vel
          </div>
        </RadioSegment>
        <RadioSegment name="in-person">
          <Icon type="private" />
          <div className="text-base text-center my-3 text-gray-800">In person</div>
          <div className="text-center text-xs text-gray-400">
            Nulla facilisi. Donec aliquam leo sed eros consectetur, vel
          </div>
        </RadioSegment>
      </RadioGroup>
      <div className="font-semibold text-xl mt-9 mb-5 tracking-wide text-gray-800">
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
            className="mr-5"
          />
        </div>
        <div className="flex-1">
          <Select
            options={DURATION_OPTIONS}
            name="duration"
            placeholder="Duration"
          />
        </div>
      </div>
      <TextArea
        name="description"
        label="Description"
        placeholder="Write a summary about your event"
      />
      <SlugInput
        label="Slug"
        name="slug"
        placeholder="custom URL"
      />
      <Button variant="primary" type="submit">
        {submitLabel}
      </Button>
    </Form>
  );
}

EventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    place: PropTypes.oneOf(['in-person', 'virtual']),
    datetime: PropTypes.instanceOf(Date),
    duration: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }),
};

EventForm.defaultProps = {
  initialValues: {},
};

export default EventForm;
