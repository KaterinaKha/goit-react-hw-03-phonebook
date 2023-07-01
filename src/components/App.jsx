import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  filterContact = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContactsList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    if (localStorageContacts !== null) {
      this.setState({ contacts: JSON.parse(localStorageContacts) });
      // console.log(JSON.parse(localStorageContacts));
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const savedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', savedContacts);
      // console.log(savedContacts);
    }
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <FilterContacts
          value={this.state.filter}
          onFilterInput={this.filterContact}
        />
        <ContactList
          contacts={this.filteredContactsList()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
