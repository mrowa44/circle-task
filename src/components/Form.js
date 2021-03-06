import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';

import './Form.css';

function Form(props) {
  const {
    children,
    formProps,
    initialValues,
    onSubmit,
  } = props;
  const methods = useForm(formProps);

  React.useEffect(() => {
    if (initialValues) {
      methods.reset(initialValues);
    }
  }, [initialValues, methods.reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form">
        {children}
      </form>
    </FormProvider>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  formProps: PropTypes.shape({
    mode: PropTypes.oneOf(['onChange', 'onBlur', 'onSubmit', 'onTouched']),
  }),
  initialValues: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  initialValues: {},
  formProps: {},
};

export default Form;
