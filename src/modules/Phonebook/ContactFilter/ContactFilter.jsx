import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';
import styles from './contact-filter.module.scss';

const ContactFilter = () => {
  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.formGroup}>
      <label htmlFor="">Find contacts by name</label>
      <input
        value={filter}
        onChange={handleFilter}
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
