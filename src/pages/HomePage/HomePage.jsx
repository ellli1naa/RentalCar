import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import styles from './HomePage.module.css';

const HomePage = () => {
  return (

    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Find your perfect rental car</h1>
        <h2 className={styles.heroSubtitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link to="/catalog">
                <button className={styles.viewBtn}>View Catalog</button>
            </Link>
      </div>
    </div>
  );
};

export default HomePage;