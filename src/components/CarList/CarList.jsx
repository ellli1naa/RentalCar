import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import CarCard from '../CarCard/CarCard';
import LoadMore from '../LoadMore/LoadMore';
import Loader from '../Loader/Loader';
import styles from './CarList.module.css';

import {
  selectCars,
  selectError,
  selectLoading
} from '../../redux/selectors/index';


const CarList = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const topCardRef = useRef(null);

  useEffect(() => {
    if (cars.length > 12 && topCardRef.current) {
      const cardHeight = topCardRef.current.getBoundingClientRect().height;
      window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
    }
  }, [cars]);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong while loading cars.');
    }
  }, [error]);

  if (loading) return <Loader />;

  return (
    <div>
      <ul className={styles.carsList}>
        {cars.map((car, index) => (
          <CarCard
            key={car.id}
            car={car}
            ref={index === 0 ? topCardRef : null}
          />
        ))}
      </ul>
      <LoadMore />
    </div>
  );
};

export default CarList;