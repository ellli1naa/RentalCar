import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { NumericFormat } from 'react-number-format';

import { selectCarsBrands } from '../../redux/selectors/index';
import { getCars } from '../../redux/actions/carsActions';
import { setFilters } from '../../redux/reducers/filtersReducer';

import styles from './Filter.module.css';
import { customSelectStyles } from './customSelectStyles';

const Filter = ({ onSearch }) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectCarsBrands);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      brand: '',
      price: null,
      mileageFrom: null,
      mileageTo: null,
    },
  });

  const brandOptions = brands?.map(brand => ({ value: brand, label: brand }));
  const priceOptions = [30, 40, 50, 60, 70, 80].map(p => ({
    value: p,
    label: `To $${p}`,
  }));


  const onSubmit = (data) => {
    const query = {};

    if (data.brand) query.brand = data.brand;
    if (data.price) query.rentalPrice = Number(data.price);
    if (typeof data.mileageFrom === 'number') query.minMileage = data.mileageFrom;
    if (typeof data.mileageTo === 'number') query.maxMileage = data.mileageTo;

    dispatch(setFilters(data));
    dispatch(getCars(query));
     if (onSearch) onSearch(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.filtersForm}>
      <div className={styles.field}>
        <label className={styles.label}>Car brand</label>
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={brandOptions}
              placeholder="Choose a brand"
              isSearchable
              styles={customSelectStyles}
              classNamePrefix="select"
              value={brandOptions.find(opt => opt.value === field.value) || null}
              onChange={opt => field.onChange(opt?.value || '')}
            />
          )}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Price / 1 hour</label>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={priceOptions}
              placeholder="Choose a price"
              styles={customSelectStyles}
              classNamePrefix="select"
              classNames={styles.selectInput}
              value={priceOptions.find(opt => opt.value === field.value) || null}
              onChange={opt => field.onChange(opt?.value ?? null)}
            />
          )}
        />
      </div>
    <div className={styles.field}>
      <label className={styles.label}>Car mileage / km</label>
      <div className={styles.mileage}>
        <Controller
          name="mileageFrom"
          control={control}
          render={({ field }) => (
            <NumericFormat
              thousandSeparator=","
              allowNegative={false}
              placeholder="From"
              prefix="From "
              className={styles.mileageInput}
              value={field.value || ''}
              onValueChange={({ floatValue }) => {
                field.onChange(floatValue ?? null);
              }}
            />
          )}
        />
        <Controller
          name="mileageTo"
          control={control}
          render={({ field }) => (
            <NumericFormat
              thousandSeparator=","
              allowNegative={false}
              placeholder="To"
              prefix="To "
              className={styles.mileageToInput}
              value={field.value || ''}
              onValueChange={({ floatValue }) => {
                field.onChange(floatValue ?? null);
              }}
            />
          )}
        />
      </div>
    </div>

      <div>
        <button type="submit" className={styles.button}>Search</button>
      </div>
    </form>
  );
};

export default Filter;