import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Find your perfect rental car</h1>
        <h2 className={styles.heroSubtitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Button variant="primary" to="/catalog" className={styles.heroButton}>
          View Catalog
        </Button>
      </div>
    </div>
  );
};

export default HomePage;