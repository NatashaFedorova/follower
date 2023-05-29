import { Text, StyledImg } from './HomeComponent.styled';

const HomeComponent = () => {
  return (
    <>
      <StyledImg
        src={`./images/${'decore-img.svg'}`}
        alt='logo'
        width='62'
        height='62'
      />
      <Text>Welcome!</Text>
    </>
  );
};

export default HomeComponent;
