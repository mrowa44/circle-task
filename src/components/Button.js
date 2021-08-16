/* eslint-disable react/button-has-type */
/* https://github.com/yannickcr/eslint-plugin-react/issues/1846#issuecomment-614921516 */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  const {
    children,
    onClick,
    type,
    variant,
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  variant: 'primary',
};
export default Button;
