import React from 'react';
// import PropTypes from 'prop-types';

import FieldsetOneInput from '../../molecules/fieldsets/FieldsetOneInput';

const Frontpage = () => {

  const createNewPoll = () => {
    console.log('click');
  }

  return (
    <div>
      <h1>Frontpage</h1>
      <FieldsetOneInput
        labelContent='Create new poll'
        buttonText='create'
        onClick={createNewPoll}
        placeholder='poll name'
        inputId='newPoll'
      />
      <FieldsetOneInput
        labelContent='Participate to a poll'
        buttonText='participate'
        onClick={createNewPoll}
        placeholder='poll id'
        inputId='participate'
      />
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