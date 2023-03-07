import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import ContactListEl from '../ContactListEl/ContactListEl';

import styles from './contact-list.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <div className={styles.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListEl
          key={id}
          name={name}
          number={number}
          removeContact={() => handleRemoveContact(id)}
        />
      ))}
    </div>
  );
};

export default ContactList;

ContactList.defaultProps = {
  // contacts: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
