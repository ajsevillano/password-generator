import Title from '../Title';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as lock from '../../assets/lock.json';

const Header = () => {
  return (
    <div className="header" data-testid="header">
      <div className="lottie-animation">
        <LottieAnimation animationName={lock} />
      </div>

      <Title />
    </div>
  );
};

export default Header;
