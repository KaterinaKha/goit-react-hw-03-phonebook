import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form className={css.contactForm} onSubmit={this.onFormSubmit}>
          <label className={css.contactLabel}>
            Name
            <input
              className={css.contactInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={css.contactLabel}>
            Phone number
            <input
              className={css.contactInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className={css.contactSubmitBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = { addContact: PropTypes.func };
