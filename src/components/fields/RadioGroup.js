import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function RadioGroup(props) {
  const {
    children,
    control,
    name,
    rules,
  } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });
  return (
    <>
      <div className="flex" key={field.value}>
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
      <p className="mt-6 text-xs text-red-600">
        {error?.message}
      </p>
    </>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  control: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  name: PropTypes.string.isRequired,
  rules: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RadioGroup.defaultProps = {
  rules: {},
};

export default RadioGroup;
