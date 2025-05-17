import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectPage, selectTotalPages } from '../../redux/selectors/index';
import { incrementPage } from '../../redux/reducers/carsReducer';
import styles from './LoadMore.module.css';

const LoadMore = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const currentPage = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    const loadMore = () => {
        if (currentPage < totalPages) {
            dispatch(incrementPage());
        }
    };

    const isLoadMore = cars.length > 0 && currentPage < totalPages && (cars.length >= 12 || currentPage === 1);

    return (
        <>
            {isLoadMore && (
                <button onClick={loadMore} className={styles.loadMoreBtn}>
                    Load more
                </button>
            )}
        </>
    );
};

export default LoadMore;