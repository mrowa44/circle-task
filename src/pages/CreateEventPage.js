import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../PageLayout';
import EventForm from '../components/EventForm';

function CreateEventPage(props) {
  const { history } = props;
  const handleAction = () => {
    history.push('/edit/1');
  };
  const handleSubmit = (data) => {
    console.log(data);
    // Send data to API
  };
  return (
    <PageLayout
      headerText="Event form"
      onPageAction={handleAction}
      pageActionLabel="Edit"
    >
      <EventForm
        onSubmit={handleSubmit}
        submitLabel="Create event"
      />
    </PageLayout>
  );
}

CreateEventPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateEventPage;
