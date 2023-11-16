import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './Contacts/contacts.reducer';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialState = {

};

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const rootReducer = combineReducers({
    contactsStore: contactsReducer,
});

export const store = createStore(rootReducer);
