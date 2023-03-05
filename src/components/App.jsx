import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

// import items from './items';

import styles from './app.module.scss';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts?.length ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDuplicate = name => {
    const normalizedName = name.toUpperCase();

    const result = contacts.find(({ name }) => {
      return name.toUpperCase() === normalizedName;
    });
    return Boolean(result);
  };

  const addContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...prevContacts];
    });
    return true;
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return result;
  };

  const filteredContacts = getFilteredContact();
  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <ContactFilter handleChange={handleFilter} />
      {isContacts && (
        <ContactList
          removeContact={removeContact}
          contacts={filteredContacts}
        />
      )}
      {!isContacts && <p>No contacts</p>}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('my-contacts'));
//     if (contacts && contacts.length) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.items !== items) {
//       localStorage.setItem('my-contacts', JSON.stringify(contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     if (this.isDuplicate(name)) {
//       alert(`${name} is already in contacts`);
//       return false;
//     }

//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };
//       return { contacts: [newContact, ...contacts] };
//     });
//     return true;
//   };

//   handleFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   removeContact = id => {
//     this.setState(({ contacts }) => {
//       const newContact = contacts.filter(contact => contact.id !== id);
//       return { contacts: newContact };
//     });
//   };

//   isDuplicate(name) {
//     const normalizedName = name.toUpperCase();
//     const { contacts } = this.state;
//     const result = contacts.find(({ name }) => {
//       return name.toUpperCase() === normalizedName;
//     });
//     return Boolean(result);
//   }

//   getFilteredContact() {
//     const { filter, contacts } = this.state;
//     if (!filter) {
//       return contacts;
//     }
//     const normalizedFilter = filter.toLowerCase();
//     const result = contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(normalizedFilter);
//     });

//     return result;
//   }

//   render() {
//     const { addContact, handleFilter, removeContact } = this;
//     const contacts = this.getFilteredContact();

//     return (
//       <div className={styles.wrapper}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />
//         <h1>Contacts</h1>
//         <ContactFilter handleChange={handleFilter} />
//         <ContactList removeContact={removeContact} contacts={contacts} />
//       </div>
//     );
//   }
// }
