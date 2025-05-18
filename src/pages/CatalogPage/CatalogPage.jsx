import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import CarList from '../../components/CarList/CarList';
import Header from "../../components/Header/Header";
import styles from './CatalogPage.module.css';

import { selectLoading, selectPage } from '../../redux/selectors/index';
import { getCars, getBrands } from '../../redux/actions/carsActions';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getCars(currentPage));
    dispatch(getBrands());
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <CarList />
    </div>
  );
};

export default CatalogPage;