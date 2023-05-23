import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // Добавляет контакт в список
  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <section title="Phonebook">
          <h1>Phonebook</h1>
          <ContactForm createUser={this.addContact} />
        </section>

        <section title="Contacts">
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
        </section>
      </div>
    );
  }
}

export default App;
