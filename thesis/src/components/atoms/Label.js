import React from 'react';
import PropTypes from 'prop-types';

const Label = ({inputId, content}) => {
  return (
    <label for={inputId}>
      {content}
    </label>
  );
}

Label.propTypes = {
  inputId: PropTypes.string,
  content: PropTypes.string,
}

export default Label;