import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  background-color: #303030;
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Header = styled.header`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: 1200px;
    height: 3px;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    transform: translateX(-50%);
  }
`;

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
`;
