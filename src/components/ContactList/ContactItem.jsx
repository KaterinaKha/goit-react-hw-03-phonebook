import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <li className={css.contactItem} key={id}>
        <span>{name}</span>:{' '}
        <span className={css.contactNumber}> {number}</span>{' '}
        <button
          className={css.contactDeleteBtn}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
