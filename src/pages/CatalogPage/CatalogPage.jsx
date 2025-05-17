import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchCars } from '../../redux/actions/carsActions';
import { resetCars, incrementPage } from '../../redux/reducers/carsReducer';
import { updateFilters } from '../../redux/reducers/filtersReducer';
import CarList from '../../components/CarList/CarList';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { items, loading, error, hasMore, initialized } = useSelector((state) => state.cars);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(resetCars());
    
    const params = Object.fromEntries(searchParams.entries());
    dispatch(updateFilters(params));
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      dispatch(fetchCars(filters));
    }
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCars(filters));
  };

  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <Filter />
      
      {loading && !initialized ? (
        <Loader />
      ) : (
        <>
          {items.length > 0 ? (
            <>
              <CarList cars={items} />
              {hasMore && (
                <button
                  className={styles.loadMore}
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  {loading ? <Loader size="small" /> : 'Load more'}
                </button>
              )}
            </>
          ) : (
            initialized && !loading && (
              <div className={styles.noResults}>
                No cars found matching your criteria
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default CatalogPage;