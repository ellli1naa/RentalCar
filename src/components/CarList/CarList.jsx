import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

const CarList = ({ cars }) => {
  return (
    <div className={styles.list}>
      {cars.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default CarList;