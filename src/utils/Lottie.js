import Lottie from 'react-lottie';

const LottieAnimation = ({ animationName, width, height }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationName.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
