import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function RadioGroup(props) {
  const { name, control, children } = props;
  const { field } = useController({ name, control });
  return (
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
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  control: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  name: PropTypes.string.isRequired,
};

export default RadioGroup;
