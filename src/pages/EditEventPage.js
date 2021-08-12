import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../PageLayout';

function EditEventPage(props) {
  const { match, history } = props;
  const { params } = match;
  const { id } = params;
  const handleAction = () => {
    history.push('/create');
  };
  return (
    <PageLayout
      headerText="Event form"
      onPageAction={handleAction}
      pageActionLabel="Cancel"
    >
      edit page - id:&nbsp;
      {id}
    </PageLayout>
  );
}

EditEventPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditEventPage;
