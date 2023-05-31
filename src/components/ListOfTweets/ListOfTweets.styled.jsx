import styled from 'styled-components';
import { DefaultButton } from '../../constants/componentsDefaultStyle';

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26px;
  width: 380px;
  height: 460px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BoxForDecorativeImages = styled.div`
  position: relative;
  overflow: hidden;
  width: 380px;
  height: 258px;
  background-image: url('./images/logo.png'), url('./images/decore-img.svg');
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 20px left 20px, top 28px left 36px;
`;

export const BoxForAvatar = styled.div`
  position: absolute;
  top: 186px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  overflow: hidden;
  width: 70px;
  height: 70px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const Frame = styled.img`
  position: absolute;
  z-index: 5px;
  left: -10px;
  top: 177px;
  width: 400px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p``;

export const Button = styled(DefaultButton)`
  margin: 0 auto;
  background-color: ${(props) => (props.isFollowing ? '#5cd3a8' : '#ebd8ff')};
`;
