import { ThreeCircles } from 'react-loader-spinner';
import { Box } from './Loading.styled';

const Loading = () => {
  return (
    <Box>
      <ThreeCircles
        height='100'
        width='100'
        color='#4fa94d'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='three-circles-rotating'
        outerCircleColor='#4B2A99'
        innerCircleColor='#471CA9'
        middleCircleColor='#5736A3'
      />
    </Box>
  );
};

export default Loading;
