import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="number"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
