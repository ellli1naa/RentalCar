import { CiCircleCheck } from "react-icons/ci";
import styles from './CarDetails.module.css';

const CarDetails = ({ title, items }) => {
    return (
        <div className={styles.listContainer}>
            <h3 className={styles.subtitle}>{title}</h3>
            <ul className={styles.list}>
                {items.map((text, index) => (
                    <li className={styles.item} key={index}>
                        <CiCircleCheck />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarDetails;