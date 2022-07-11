import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contactNames, removeContact }) => {
  return (
    <div>
      {contactNames.map(({ id, number, name }) => {
        return (
          <li key={id} className={style.item}>
            {name}: {number}
            <div>
              <button
                className={style.removeBtn}
                onClick={() => removeContact(id)}
              >
                Delete
              </button>
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
