import React from 'react';
import { Link } from 'react-router-dom';
import s from './CarCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { toggleFavourite } from '../../redux/reducers/favouritesReducer';
import { selectFavourites } from '../../redux/selectors/index';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavourites);

  const isFavorite = favorites.some(fav => fav.id === car.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavourite(car));
  };

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
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={s.image} />

        <button type="button" className={s.favBtn} onClick={handleFavoriteClick}>
          {isFavorite ? (
            <IoIosHeart className={s.heartIconActive} />
          ) : (
            <IoIosHeartEmpty className={s.heartIcon} />
          )}
        </button>
      </div>

      <div className={s.header}>
        <h3 className={s.name}>
          {brand} <span className={s.spanModel}>{model}</span>, {year}
        </h3>
        <h3 className={s.name}>${rentalPrice}</h3>
      </div>

      <div className={s.details}>
        <span>{location} | </span>
        <span>{rentalCompany} | </span>
        <div className={s.typeMileage}>
          <span>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} | </span>
          <span>{mileage.toLocaleString('uk-UA')} km</span>
        </div>
      </div>

      <Link className={s.readMore} to={`/catalog/${id}`}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;