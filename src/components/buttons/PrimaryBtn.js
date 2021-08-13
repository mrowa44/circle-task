/* eslint-disable react/button-has-type */
/* https://github.com/yannickcr/eslint-plugin-react/issues/1846#issuecomment-614921516 */
import React from 'react';
import PropTypes from 'prop-types';

function PrimaryBtn(props) {
  const {
    children,
    type,
    onClick,
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-md px-8 py-2.5 text-white bg-indigo-500 hover:bg-indigo-400"
    >
      {children}
    </button>
  );
}

PrimaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
};

PrimaryBtn.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default PrimaryBtn;
