import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Rental<span className={styles.logocar}>Car</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/catalog" className={styles.link}>
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;