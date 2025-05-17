import { useParams } from 'react-router-dom';
import CarDetails from '../../components/CarDetails/CarDetails';
import styles from './SingleCarPage.module.css';

const SingleCarPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <CarDetails id={id} />
    </div>
  );
};

export default SingleCarPage;