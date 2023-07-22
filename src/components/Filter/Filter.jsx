import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/CreateAction';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contact by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleFilter}
        className={css.formInput}
      />
    </>
  );
};
