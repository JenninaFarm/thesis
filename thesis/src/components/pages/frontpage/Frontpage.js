import React from 'react';
// import PropTypes from 'prop-types';

import Input from '../../atoms/input/Input'

const Frontpage = () => {
  return (
    <div>
      <h1>Frontpage</h1>
      <h4>Create new poll</h4>
      <Input placeholder='new poll' />
      <h4>Participate in poll</h4>
      <Input placeholder='poll code' />
    </div>
  )
}

Frontpage.propTypes = {
  // optionalNumber: PropTypes.number,
  // optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  // requiredFunc: PropTypes.func.isRequired,
  // // An object taking on a particular shape
  // optionalObjectWithShape: PropTypes.shape({
  //   optionalProperty: PropTypes.string,
  //   requiredProperty: PropTypes.number.isRequired
  // }),

  // // An object with warnings on extra properties
  // optionalObjectWithStrictShape: PropTypes.exact({
  //   optionalProperty: PropTypes.string,
  //   requiredProperty: PropTypes.number.isRequired
  // }),
}

export default Frontpage;