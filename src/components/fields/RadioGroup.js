import React from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import './RadioGroup.css';

function RadioGroup(props) {
  const {
    children,
    name,
    rules,
  } = props;
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });
  return (
    <>
      <div className="radio-group__container" key={field.value}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          const checked = field.value === child.props.name;
          return React.cloneElement(child, {
            ...child.props,
            key: child.props.name,
            checked,
            onChange: () => field.onChange(child.props.name),
          });
        })}
      </div>
      <p className="radio-group__error">
        {error?.message}
      </p>
    </>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RadioGroup.defaultProps = {
  rules: {},
};

export default RadioGroup;
