import React from 'react';
import PropTypes from 'prop-types';

import Button from './components/Button';
import Icon from './components/Icon';
import './PageLayout.css';

function PageLayout(props) {
  const {
    children,
    headerText,
    onPageAction,
    pageActionLabel,
  } = props;
  return (
    <div className="layout-container">
      <header className="header">
        <button type="button" className="header__close-button">
          <Icon type="cross" alt="close" />
        </button>
        <div className="header__content">
          <h1 className="header__text">
            {headerText}
          </h1>
          <Button variant="secondary" onClick={onPageAction}>
            {pageActionLabel}
          </Button>
        </div>
      </header>
      <main className="main">
        <div className="main__content">
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
