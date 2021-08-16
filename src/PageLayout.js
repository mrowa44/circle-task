import React from 'react';
import PropTypes from 'prop-types';

import Button from './components/Button';
import Icon from './components/Icon';

function PageLayout(props) {
  const {
    children,
    headerText,
    onPageAction,
    pageActionLabel,
  } = props;
  return (
    <div className="min-h-full h-full flex flex-col">
      <header className="h-60 px-4 sm:px-0">
        <button type="button" className="block ml-auto mt-5 sm:mr-5 hover:opacity-70">
          <Icon type="cross" alt="close" />
        </button>
        <div className="max-w-xl m-auto mt-20 mb-8 flex justify-between">
          <h1 className="text-4xl font-bold text-gray-800">
            {headerText}
          </h1>
          <Button variant="secondary" onClick={onPageAction}>
            {pageActionLabel}
          </Button>
        </div>
      </header>
      <main className="bg-gray-100 flex-1">
        <div className="sm:max-w-xl m-auto mt-14 pb-40">
          {children}
        </div>
      </main>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerText: PropTypes.string.isRequired,
  onPageAction: PropTypes.func.isRequired,
  pageActionLabel: PropTypes.string.isRequired,
};

export default PageLayout;
