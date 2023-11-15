import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

import { nanoid } from 'nanoid';

export const App = () => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(parsedContacts);
  const [filter, setFilter] = useState('');

  useEffect(
    prevState => {
      if (prevState !== contacts) {
        const newContacts = JSON.stringify(contacts);
        localStorage.setItem('contacts', newContacts);
      }
    },
    [contacts]
  );

  const handleAddContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      alert('Contact already exists');
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilterChangeState = newFilter => {
    setFilter(newFilter);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter handleFilterChangeState={handleFilterChangeState} />

      <ul>
        {filteredContacts().map(contact => (
          <ContactsList
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
