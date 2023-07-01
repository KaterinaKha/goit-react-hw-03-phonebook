import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const FilterContacts = ({ value, onFilterInput }) => {
  return (
    <div className={css.filterContainer}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={onFilterInput}
      />
    </div>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func,
};
