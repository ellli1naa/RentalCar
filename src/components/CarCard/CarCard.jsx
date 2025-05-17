import { forwardRef } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import styles from './CarCard.module.css';

const CarCard = forwardRef(({ car }, ref) => {
  const {
    id,
    brand,
    model,
    year,
    type,
    img,
    rentalPrice,
    rentalCompany,
    mileage,
    address
  } = car;

  const location = address?.split(', ').slice(1).join(' | ');

  return (
    <li className={styles.card} ref={ref}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={styles.image} />
        <button type="button" className={styles.favBtn}>
          <IoIosHeartEmpty className={styles.disabled} />
        </button>
      </div>

      <div className={styles.header}>
        <h3 className={styles.name}>
          {brand} <span>{model}</span>, {year}
        </h3>
        <h3 className={styles.name}>${rentalPrice}</h3>
      </div>

      <div className={styles.details}>
        <span>{location}</span>
        <span>{rentalCompany}</span>
        <span>{type[0].toUpperCase() + type.slice(1)}</span>
        <span>{mileage.toLocaleString('uk-UA')} km</span>
      </div>

      <Link className={styles.readMore} to={`/catalog/${id}`}>
        Read more
      </Link>
    </li>
  );
});

export default CarCard;