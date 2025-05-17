import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import CarList from '../../components/CarList/CarList';
import styles from './CatalogPage.module.css';

import { selectLoading, selectPage } from '../../redux/selectors/index';
import { getCars } from '../../redux/actions/carsActions';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <CarList />
    </div>
  );
};

export default CatalogPage;