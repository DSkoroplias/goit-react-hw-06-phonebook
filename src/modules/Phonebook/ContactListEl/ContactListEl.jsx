import React from 'react';

import PropTypes from 'prop-types';

const ContactListEl = ({ id, name, number, removeContact }) => {
  return (
    <ul>
      <li key={id}>
        {name}: {number}
        <button onClick={removeContact} type="button">
          Delete
        </button>
      </li>
    </ul>
  );
};

export default ContactListEl;

ContactListEl.propTypes = {
  removeContact: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
