import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

const FieldsetOneInput = ({buttonText, onClick, placeholder, inputId, labelContent}) => {
  return (
    <fieldset>
      <Label inputId={inputId} content={labelContent} />
      <Input id={inputId} placeholder={placeholder} />
      <Button onClick={onClick}>
        {buttonText}
      </Button>
    </fieldset>
  );
}

FieldsetOneInput.propTypes = {
  buttonText: PropTypes.string,
  inputId: PropTypes.string,
  onClick: PropTypes.func,
  labelContent: PropTypes.string,
  placeholder: PropTypes.string,
}

export default FieldsetOneInput;