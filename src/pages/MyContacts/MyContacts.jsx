
import { useDispatch, useSelector } from 'react-redux';

import { filterChangeState } from 'redux/Filter/filter.reducer';
import { deleteContact } from 'redux/Contacts/contacts.reducer';
import { StyledContactsList } from './Styled';
import { ContactsList } from 'components/List/ContactsList';
import { Filter } from 'components/Filter/Filter';

const MyContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filter);

  const handleFilterChangeState = newFilter => {
    dispatch(filterChangeState(newFilter));
  };

  const filteredContacts = () => {
    return (
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    )
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <StyledContactsList>
      <div>
        <Filter handleFilterChangeState={handleFilterChangeState} />

        {filteredContacts().length !== 0 ? (
          <h1 className="main-title">My contacts</h1>
        ) : (
          <p>No contacts available</p>
        )}
        <ul className="contacts-list">
          {filteredContacts().map(({ id, name, number }) => (
            <ContactsList
              key={id}
              id={id}
              name={name}
              number={number}
              handleDeleteContact={handleDeleteContact}
            />
          ))}
        </ul>
      </div>
    </StyledContactsList>
  );
};

export default MyContacts;
