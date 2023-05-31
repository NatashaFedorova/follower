import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout';
import { Background } from '../../constants/componentsDefaultStyle';

const HomePage = lazy(() => import('../../pages/HomePage'));
const TweetsPage = lazy(() => import('../../pages/TweetsPage'));

const App = () => {
  return (
    <Background>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='tweets' element={<TweetsPage />} />
          <Route path='*' element={<HomePage />} />
        </Route>
      </Routes>
    </Background>
  );
};

export default App;
