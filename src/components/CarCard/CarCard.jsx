import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions/favoritesActions';
import { formatMileage } from '../../utils/formatMileage';
import Button from '../Button/Button';
import HeartIcon from '../Icons/HeartIcon';
import styles from './CarCard.module.css';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav._id === car._id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car._id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={car.img} alt={car.make} className={styles.image} />
        <button
          type="button"
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            {car.make} <span className={styles.model}>{car.model}</span>, {car.year}
          </h3>
          <p className={styles.price}>${car.rentalPrice}</p>
        </div>
        <div className={styles.details}>
          <span>{car.address.split(',')[1]}</span>
          <span>{car.address.split(',')[2]}</span>
          <span>{car.rentalCompany}</span>
          <span>{car.type}</span>
          <span>{car.model}</span>
          <span>{formatMileage(car.mileage)}</span>
          <span>{car.accessories[0]}</span>
        </div>
      </div>
      <Button variant="primary" to={`/catalog/${car._id}`}>
        Learn more
      </Button>
    </div>
  );
};

export default CarCard;