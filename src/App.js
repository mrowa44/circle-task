import React from 'react';
import './index.css';
import PageLayout from './PageLayout';

function App() {
  return (
    <PageLayout
      headerText="Event form"
      onPageAction={() => {}}
      pageActionLabel="Edit"
    >
      text
    </PageLayout>
  );
}

export default App;
