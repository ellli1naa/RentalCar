import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>
        Reliable and budget-friendly rentals for any journey
        </p>
        <Button variant="primary" to="/catalog" className={styles.button}>
          View Catalog
        </Button>
      </div>
    </section>
  );
};

export default Hero;