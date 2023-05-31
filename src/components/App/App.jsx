import { Navigate, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout';
import { Background } from '../../constants/componentsDefaultStyle';

const HomePage = lazy(() => import('../../pages/HomePage'));
const TweetsPage = lazy(() => import('../../pages/TweetsPage'));

const RouteRedirection = ({ component: Component, redirectTo }) => {
  return <Navigate component={<Component />} redirectTo={redirectTo} />;
};

const App = () => {
  return (
    <Background>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='tweets' element={<TweetsPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Background>
  );
};

export default App;

RouteRedirection.propTypes = {
  component: PropTypes.func,
  redirectTo: PropTypes.string,
};
