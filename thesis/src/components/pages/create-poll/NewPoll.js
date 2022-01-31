import React from 'react';
import PropTypes from 'prop-types';

const NewPoll = ({pollName}) => {
  return (
    <div>
      <h1> New Poll </h1>
    </div>
  )
}

NewPoll.propTypes = {
  pollName: PropTypes.string,
}

export default NewPoll;