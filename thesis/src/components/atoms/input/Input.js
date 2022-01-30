import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, placeholder, id}) => {
  return (
    <input type={type} placeholder={placeholder} size={10} id={id}>
    </input>
  );
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
}

export default Input;