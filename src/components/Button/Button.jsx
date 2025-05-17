import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  type = 'button', 
  ...props 
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}