import { ThreeCircles } from 'react-loader-spinner';

function Loader(props) {
  return (
    <ThreeCircles
      cl
      height="200"
      width="200"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
}

export default Loader;