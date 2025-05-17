import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../redux/actions/carsActions';
import RentalForm from '../RentalForm/RentalForm';
import Loader from '../Loader/Loader';
import styles from './CarDetails.module.css';

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCar, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!currentCar) return null;

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
    functionalities,
    description,
  } = currentCar;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={img} alt={`${make} ${model}`} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>
          {make} <span className={styles.model}>{model}</span>, {year}
        </h2>
        <div className={styles.details}>
          <p>{address}</p>
          <p>Company: {rentalCompany}</p>
          <p>Type: {type}</p>
          <p>Mileage: {mileage.toLocaleString()} km</p>
          <p>Price: ${rentalPrice} per day</p>
        </div>
        <div className={styles.description}>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className={styles.features}>
          <h3>Accessories</h3>
          <ul>
            {accessories.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.features}>
          <h3>Functionalities</h3>
          <ul>
            {functionalities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <RentalForm carId={id} />
      </div>
    </div>
  );
};

export default CarDetails;