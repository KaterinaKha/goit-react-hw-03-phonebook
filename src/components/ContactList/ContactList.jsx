import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import css from './Contact.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contaktList}>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};
