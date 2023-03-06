import PropTypes from 'prop-types';

import styles from './contact-filter.module.scss';

const ContactFilter = ({ handleChange, value }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="">Find contacts by name</label>
      <input
        value={value}
        onChange={handleChange}
        name="filter"
        type="text"
        placeholder="Filter books"
      />
    </div>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
