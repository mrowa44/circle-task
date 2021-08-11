/* eslint-disable react/button-has-type */
/* https://github.com/yannickcr/eslint-plugin-react/issues/1846#issuecomment-614921516 */
import React from 'react';
import PropTypes from 'prop-types';

function SecondaryBtn(props) {
  const {
    children,
    type,
    onClick,
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="border rounded-md px-8 hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

SecondaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};

SecondaryBtn.defaultProps = {
  type: 'button',
};

export default SecondaryBtn;
