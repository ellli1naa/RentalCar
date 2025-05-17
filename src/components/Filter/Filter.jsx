import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { updateFilters, resetFilters } from '../../redux/reducers/filtersReducer';
import Button from '../Button/Button';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch(updateFilters(params));
  }, [dispatch, searchParams]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setSearchParams(newFilters);
  };

  const handleReset = () => {
    dispatch(resetFilters());
    setSearchParams({});
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterGroup}>
        <label htmlFor="brand">Car brand</label>
        <select
          id="brand"
          name="brand"
          value={filters.brand || ''}
          onChange={handleFilterChange}
        >
          <option value="">All brands</option>
          <option value="Buick">Buick</option>
          <option value="Volvo">Volvo</option>
          <option value="HUMMER">HUMMER</option>
          <option value="Subaru">Subaru</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Nissan">Nissan</option>
          <option value="Lincoln">Lincoln</option>
          <option value="GMC">GMC</option>
          <option value="Hyundai">Hyundai</option>
          <option value="MINI">MINI</option>
          <option value="Bentley">Bentley</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Pontiac">Pontiac</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="Kia">Kia</option>
          <option value="Land Rover">Land Rover</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="price">Price/1 hour</label>
        <select
          id="price"
          name="price"
          value={filters.price || ''}
          onChange={handleFilterChange}
        >
          <option value="">All prices</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
          <option value="60">$60</option>
          <option value="70">$70</option>
          <option value="80">$80</option>
          <option value="90">$90</option>
          <option value="100">$100</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="mileageFrom">Mileage from</label>
        <input
          type="number"
          id="mileageFrom"
          name="mileageFrom"
          placeholder="From"
          value={filters.mileageFrom || ''}
          onChange={handleFilterChange}
        />
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="mileageTo">Mileage to</label>
        <input
          type="number"
          id="mileageTo"
          name="mileageTo"
          placeholder="To"
          value={filters.mileageTo || ''}
          onChange={handleFilterChange}
        />
      </div>

      <Button variant="secondary" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default Filter;