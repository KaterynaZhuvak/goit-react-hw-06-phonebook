import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/Contacts/contacts.reducer';
import { ContactForm } from 'components/CreateNewContactForm/ContactForm';

const CreateNewContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  const handleAddContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      alert('Contact already exists');
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
  };

  return (
    <div>
      <ContactForm handleAddContact={handleAddContact} />
    </div>
  );
};

export default CreateNewContact;
