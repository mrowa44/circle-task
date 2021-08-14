/* eslint-disable react/button-has-type */
/* https://github.com/yannickcr/eslint-plugin-react/issues/1846#issuecomment-614921516 */
import React from 'react';
import PropTypes from 'prop-types';

function getButtonClass(variant) {
  switch (variant) {
    case 'primary':
      return 'rounded-md px-8 py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 font-bold';
    case 'secondary':
      return 'border rounded-md px-8 hover:border-indigo-600 hover:text-indigo-600 text-gray-600 font-medium';
    default:
      return '';
  }
}

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
      className={getButtonClass(variant)}
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
