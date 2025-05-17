import { FaRegCalendarAlt, FaCar, FaGasPump, FaCog } from 'react-icons/fa';

import styles from '../CarSpecifications/CarSpecifications.module.css';

const CarSpecifications = ({ year, type, fuelConsumption, engineSize }) => {
    const formatType = type => type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

    const specs = [
        { icon: <FaRegCalendarAlt />, label: 'Year', value: year },
        { icon: <FaCar />, label: 'Type', value: formatType(type) },
        { icon: <FaGasPump />, label: 'Fuel Consumption', value: `${fuelConsumption} L/100km` },
        { icon: <FaCog />, label: 'Engine Size', value: `${engineSize} L` },
    ];

    return (
        <div className={styles .listContainer}>
            <h3 className={styles .subtitle}>Car Specifications:</h3>
            <ul className={styles .list}>
                {specs.map(({ icon, label, value }) => (
                    <li key={label} className={styles .item}>
                        {icon}
                        <p>
                            {label}: {value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarSpecifications;