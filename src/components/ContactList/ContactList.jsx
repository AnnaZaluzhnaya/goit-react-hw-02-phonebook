import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contactNames, removeContact }) => {
  return (
    <div>
      {contactNames.map(({ id, number, name }) => {
        return (
          <li key={id}>
            {name}: {number}
            <div>
              <button onClick={() => removeContact(id)}>Delete</button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func,
  contactNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
