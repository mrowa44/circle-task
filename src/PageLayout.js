import React from 'react';
import PropTypes from 'prop-types';

import SecondaryBtn from './components/buttons/SecondaryBtn';
import crossIcon from './assets/cross.svg';

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
        <button type="button" className="block ml-auto mt-5 mr-5 hover:opacity-70">
          <img src={crossIcon} alt="close" />
        </button>
        <div className="max-w-xl m-auto mt-20 flex justify-between">
          <h1 className="text-4xl font-bold text-gray-800">
            {headerText}
          </h1>
          <SecondaryBtn onClick={onPageAction}>
            {pageActionLabel}
          </SecondaryBtn>
        </div>
      </header>
      <main className="h-full bg-gray-100 px-4 sm:px-0">
        <div className="max-w-xl m-auto mt-16">
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