const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// наш глобальний стейт
const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? contacts,
};

// функція редюсер яка змінює стейт або ініціалізує попередній
export const contactsReducer = (state = initialState, action) => {
  // action - {type: (придумуємо самі) contacts/deleteContact, payload: {зазвичай наше contactId }
  // вся логіка прописується в редюсерах
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
      contacts: [...state.contacts, action.payload]}
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }
    }
    default: return state;

  }
};
