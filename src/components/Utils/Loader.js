import { ThreeCircles } from 'react-loader-spinner';
import { Box } from '../General/Box.styled';

export const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="fixed"
    top={0}
    left={0}
    height="100vh"
    width="100vw"
  >
    <ThreeCircles
      height="200"
      width="200"
      color="#4fa94d"
      wrapperStyle={{
        alignItems: clearInterval,
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </Box>
);
