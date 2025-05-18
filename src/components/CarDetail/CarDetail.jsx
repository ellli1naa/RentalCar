import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import CarAbout from '../CarAbout/CarAbout';
import RentalForm from '../RentalForm/RentalForm';
import CarDetails from '../CarDetails/CarDetails';
import CarSpecifications from '../CarSpecifications/CarSpecifications';
import { selectCurrentCar, selectLoading } from '../../redux/selectors/index';
import { getCarById } from '../../redux/actions/carsActions';
import s from './CarDetail.module.css';

const CarDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const car = useSelector(selectCurrentCar);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(getCarById(id));
    }, [dispatch, id]);

    if (isLoading || !car) {
        return <Loader />;
    }

    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.image} src={car.img} alt={car.model} />
                <RentalForm />
            </div>
            <div>
                <CarAbout car={car} />
                <div className={s.infoWrapper}>
                    <CarDetails title="Rental Conditions:" items={car.rentalConditions} />
                    <CarSpecifications {...car} />
                    <CarDetails title="Accessories and Functionalities:" items={[...car.accessories, ...car.functionalities]} />
                </div>
            </div>
        </div>
    );
};

export default CarDetail;