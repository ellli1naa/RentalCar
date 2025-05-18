import { IoLocationOutline } from "react-icons/io5";
import s from './CarAbout.module.css';

const CarAbout = ({ car }) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    {car.brand} {car.model}, {car.year}
                </h2>
                <p className={s.id} title={car.id}>
                    {`Id: ${car.id.slice(0, 4)}...`}
                </p>
            </div>
            <div className={s.textWrapper}>
                <div className={s.addressWrapper}>
                    <IoLocationOutline />
                    <p className={s.address}>{car.address.split(', ').slice(1).join(', ')}</p>
                </div>
                <p className={s.mileage}>Mileage: {car.mileage}</p>
            </div>
            <p className={s.price}>${car.rentalPrice}</p>
            <p className={s.description}>{car.description}</p>
        </div>
    );
};
export default CarAbout;