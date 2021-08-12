import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../PageLayout';

function CreateEventPage(props) {
  const { history } = props;
  const handleAction = () => {
    history.push('/edit/1');
  };
  return (
    <PageLayout
      headerText="Event form"
      onPageAction={handleAction}
      pageActionLabel="Edit"
    >
      create page
    </PageLayout>
  );
}

CreateEventPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateEventPage;
