import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { NumericFormat } from 'react-number-format';

import { selectCarsBrands } from '../../redux/selectors/index';
import { getCars } from '../../redux/actions/carsActions';
import { setFilters } from '../../redux/reducers/filtersReducer';

import styles from './Filter.module.css';
import { customSelectStyles } from './customSelectStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectCarsBrands);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      brand: '',
      price: null,
      mileageFrom: '',
      mileageTo: '',
    },
  });

  const brandOptions = brands?.map(brand => ({ value: brand, label: brand }));
  const priceOptions = [30, 40, 50, 60, 70, 80].map(p => ({ value: p, label: `$${p}` }));

  const onSubmit = data => {
    dispatch(setFilters(data));

    const query = {
      ...(data.brand && { brand: data.brand }),
      ...(data.price && { rentalPrice: data.price }),
      ...(data.mileageFrom && { minMileage: data.mileageFrom }),
      ...(data.mileageTo && { maxMileage: data.mileageTo }),
    };

    dispatch(getCars(query));
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
              className={styles.selectInput}
              styles={customSelectStyles}
              classNamePrefix="select"
              onChange={opt => field.onChange(opt?.value || '')}
              value={brandOptions.find(opt => opt.value === field.value) || null}
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
              className={styles.selectInput}
              styles={customSelectStyles}
              placeholder="Choose a price"
              classNamePrefix="select"
              onChange={opt => field.onChange(opt?.value || null)}
              value={priceOptions.find(opt => opt.value === field.value) || null}
            />
          )}
        />
      </div>

<div className={styles.mileage}>
  <Controller
    name="mileageFrom"
    control={control}
    render={({ field }) => (
      <NumericFormat
        {...field}
        allowNegative={false}
        thousandSeparator=","
        placeholder="From"
        className={styles.mileageInput}
        value={field.value}
        onValueChange={({ floatValue }) => {
          field.onChange(floatValue ?? '');
        }}
        prefix="From "
        displayType="input"
      />
    )}
  />
  <Controller
    name="mileageTo"
    control={control}
    render={({ field }) => (
      <NumericFormat
        {...field}
        allowNegative={false}
        thousandSeparator=","
        placeholder="To"
        className={styles.mileageToInput}
        value={field.value}
        onValueChange={({ floatValue }) => {
          field.onChange(floatValue ?? '');
        }}
        prefix="To "
        displayType="input"
      />
    )}
  />
</div>

      <div>
        <button type="submit" className={styles.button}>Search</button>
      </div>
    </form>
  );
};

export default Filter;