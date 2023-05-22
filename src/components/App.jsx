import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandle = data => {
    console.log(data);
  };

  render() {
    return (
      <section title="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandle} />
      </section>

      // <section title="Contacts">
      //     <h2>Contacts</h2>
      //     <ContactList/>
      // </section>
    );
  }
}

export default App;
