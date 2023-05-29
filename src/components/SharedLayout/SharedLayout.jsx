import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Header,
  Main,
  Container,
} from '../../constants/componentsDefaultStyle';
import Navigation from '../Navigation';
import Loading from '../Loading';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default SharedLayout;
