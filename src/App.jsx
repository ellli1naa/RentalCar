import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const SingleCarPage = lazy(() => import('./pages/SingleCarPage/SingleCarPage'));

function App() {
  return (
    <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<SingleCarPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
    </>
  );
}

export default App;