import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../PageLayout';
import EventForm from '../components/EventForm';

function getEventData(eventId) {
  // Mocked event
  return {
    id: eventId,
    name: `Test Event ${eventId}`,
    place: 'in-person',
    datetime: new Date(),
    duration: '2h',
    description: 'Test Event description',
    slug: 'test',
  };
}

function EditEventPage(props) {
  const { match, history } = props;
  const { params } = match;
  const { id } = params;

  const handleAction = () => {
    history.push('/create');
  };
  const handleSubmit = (data) => {
    // Send data to API
    console.log(data);
  };
  const [apiEvent, setApiEvent] = React.useState(null);
  React.useEffect(() => {
    const event = getEventData(id);
    setApiEvent(event);
  }, [id]);

  return (
    <PageLayout
      headerText="Event form"
      onPageAction={handleAction}
      pageActionLabel="Cancel"
    >
      <EventForm
        onSubmit={handleSubmit}
        submitLabel="Save"
        initialValues={apiEvent}
      />
    </PageLayout>
  );
}

EditEventPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditEventPage;
